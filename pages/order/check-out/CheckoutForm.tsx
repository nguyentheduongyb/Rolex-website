import { useEffect, useMemo, useState } from "react";
import { malaysiaLocations } from "../../../data/malaysiaLocations";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";

interface FormData {
 fullName: string;
 phone: string;
 email: string;
 address: string;
 province: string;
 district: string;
 zipcode: string;
}

interface TrackingData {
 utm_source: string;
 utm_medium: string;
 utm_campaign: string;
 utm_content: string;
 utm_term: string;
 fbclid: string;
 landing_page: string;
}

import type { RolexWatch } from "~/data/rolexWatches";

interface CartItem extends RolexWatch {
 quantity: number;
}

interface CheckoutFormProps {
 watchData: CartItem[];
}

const MAX_QUANTITY = 2;

export default function CheckoutForm({ watchData }: CheckoutFormProps) {
 // ==========================================
 // CUSTOMER FORM
 // ==========================================

 const [formData, setFormData] = useState<FormData>({
  fullName: "",
  phone: "",
  email: "",
  address: "",
  province: "",
  district: "",
  zipcode: "",
 });

 // ==========================================
 // PRODUCTS
 // ==========================================

 const [cartItems, setCartItems] = useState<CartItem[]>(() => watchData);

 useEffect(() => {
  if (typeof window === "undefined") return;

  localStorage.setItem("rolex_cart", JSON.stringify(cartItems));

  console.log("Updated cart:", cartItems);

  window.dispatchEvent(new Event("cartUpdated"));
 }, [cartItems]);

 // ==========================================
 // TRACKING DATA
 // ==========================================

 const [trackingData, setTrackingData] = useState<TrackingData>({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  fbclid: "",
  landing_page: "",
 });

 // ==========================================
 // SUBMITTING
 // ==========================================

 const [isSubmitting, setIsSubmitting] = useState(false);

 // ==========================================
 // QUANTITY MESSAGE
 // ==========================================

 const [quantityMessage, setQuantityMessage] = useState("");

 // ==========================================
 // GET UTM + FBCLID
 // ==========================================

 useEffect(() => {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);

  const tracking: TrackingData = {
   utm_source: params.get("utm_source") || "",

   utm_medium: params.get("utm_medium") || "",

   utm_campaign: params.get("utm_campaign") || "",

   utm_content: params.get("utm_content") || "",

   utm_term: params.get("utm_term") || "",

   fbclid: params.get("fbclid") || "",

   landing_page: window.location.href,
  };

  const hasTracking = tracking.utm_source || tracking.utm_medium || tracking.utm_campaign || tracking.utm_content || tracking.utm_term || tracking.fbclid;

  if (hasTracking) {
   localStorage.setItem("trackingData", JSON.stringify(tracking));

   setTrackingData(tracking);

   return;
  }

  const savedTracking = localStorage.getItem("trackingData");

  if (savedTracking) {
   try {
    const parsedTracking = JSON.parse(savedTracking);

    setTrackingData(parsedTracking);
   } catch (error) {
    console.error("Cannot parse tracking data:", error);
   }
  }
 }, []);

 // ==========================================
 // PROVINCES
 // ==========================================

 const provinces = useMemo(() => {
  return malaysiaLocations.states || [];
 }, []);

 // ==========================================
 // SELECTED PROVINCE
 // ==========================================

 const selectedProvince = useMemo(() => {
  return provinces.find((province: any) => province.name === formData.province);
 }, [formData.province, provinces]);

 // ==========================================
 // DISTRICTS
 // ==========================================

 const districts = useMemo(() => {
  return selectedProvince?.cities || [];
 }, [selectedProvince]);

 // ==========================================
 // SELECTED DISTRICT
 // ==========================================

 const selectedDistrict = useMemo(() => {
  return districts.find((district: any) => district.name === formData.district);
 }, [districts, formData.district]);

 // ==========================================
 // ZIPCODES
 // ==========================================

 const zipcodes = useMemo(() => {
  return selectedDistrict?.towns || [];
 }, [selectedDistrict]);

 // ==========================================
 // TOTAL QUANTITY
 // ==========================================

 const totalQuantity = useMemo(() => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
 }, [cartItems]);

 // ==========================================
 // TOTAL PRICE
 // ==========================================

 const totalPrice = useMemo(() => {
  return cartItems.reduce((total, item) => total + item.priceNew * item.quantity, 0);
 }, [cartItems]);

 // ==========================================
 // FORMAT PRICE
 // ==========================================

 const formatPrice = (price: number) => {
  return price.toLocaleString("en-MY", {
   minimumFractionDigits: 0,
   maximumFractionDigits: 2,
  });
 };

 // ==========================================
 // HANDLE FORM CHANGE
 // ==========================================

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  setFormData((prev) => {
   const newData = {
    ...prev,
    [name]: value,
   };

   if (name === "province") {
    newData.district = "";
    newData.zipcode = "";
   }

   if (name === "district") {
    newData.zipcode = "";
   }

   return newData;
  });
 };

 // ==========================================
 // SUBMIT GOOGLE SHEET
 // ==========================================

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (isSubmitting) return;

  if (!cartItems.length) {
   alert("Your shopping bag is empty.");

   return;
  }

  setIsSubmitting(true);

  const products = cartItems.map((item) => ({
   id: item.id,
   model: item.name || "",
   reference: item.reference || "",
   quantity: item.quantity,
   price: item.priceNew,
   totalPrice: item.priceNew * item.quantity,
  }));

  const dataToSend = {
   submitted_at: new Date().toISOString(),

   // CUSTOMER
   fullName: formData.fullName,
   phone: formData.phone,
   email: formData.email,
   address: formData.address,
   province: formData.province,
   district: formData.district,
   zipcode: formData.zipcode,

   // PRODUCTS
   products,

   // ORDER TOTAL
   totalQuantity,
   totalPrice,

   // TRACKING
   utm_source: trackingData.utm_source || "",
   utm_medium: trackingData.utm_medium || "",
   utm_campaign: trackingData.utm_campaign || "",
   utm_content: trackingData.utm_content || "",
   utm_term: trackingData.utm_term || "",
   fbclid: trackingData.fbclid || "",
   landing_page: trackingData.landing_page || "",
  };

  console.log("Data sending:", dataToSend);

  try {
   await fetch("https://script.google.com/macros/s/AKfycbzTj3MrZq9-y4cwTm8Uq9qGgdjQmBHgbij3g-kmdk4TwB0gOKjIT-ixTS_DqLwJF69J/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(dataToSend),
   });

   alert("Your information has been submitted successfully!");
  } catch (error) {
   console.error("Error sending data:", error);

   alert("Something went wrong. Please try again.");
  } finally {
   setIsSubmitting(false);
  }
 };
 const updateQuantity = (id: string, newQuantity: number) => {
  if (newQuantity < 1) return;

  if (newQuantity > MAX_QUANTITY) {
   setQuantityMessage(`A maximum of ${MAX_QUANTITY} watches of the same model can be purchased.`);

   return;
  }

  setQuantityMessage("");

  setCartItems((prev) =>
   prev.map((item) =>
    item.id === id
     ? {
        ...item,
        quantity: newQuantity,
       }
     : item,
   ),
  );
 };
 return (
  <div className="border border-[#dededb] bg-white">
   {/* ==========================================
          ORDER SUMMARY
      ========================================== */}

   <section className="border-b border-[#dededb] p-5 md:p-8">
    {/* HEADER */}

    <div className="mb-7 flex items-center justify-between">
     <h2 className="text-xl font-medium">1. Order summary</h2>

     <button type="button" className="cursor-pointer">
      <FaHeart className="text-lg" />
     </button>
    </div>

    {/* PRODUCTS */}

    <div className="space-y-6">
     {cartItems.map((item) => (
      <div key={item.id} className="flex gap-5">
       {/* IMAGE */}

       <div className="flex h-[130px] w-[100px] shrink-0 items-center justify-center md:h-[150px] md:w-[120px]">
        <img src={item.images.main || "/image/watches/details/m126234-0051.avif"} alt={item.name || "Watch"} className="h-full w-full object-contain" />
       </div>

       {/* PRODUCT INFO */}

       <div className="flex flex-1 flex-col">
        <div>
         <h3 className="font-semibold">{item.name || "No watch selected"}</h3>

         {item.case.model && <p className="mt-2 text-sm text-[#666]">{item.case.model}</p>}

         {item.reference && <p className="mt-1 text-sm text-[#777]">Reference {item.reference}</p>}
         {item.quantity && (
          <p className="mt-1 text-sm text-[#777]">
           Quantity {item.quantity}, {item.currency} {item.priceNew}
          </p>
         )}
        </div>
       </div>
       <div className="flex h-11 items-center border border-[#dededb]">
        <button
         type="button"
         disabled={item.quantity <= 1}
         onClick={() => updateQuantity(item.id, item.quantity - 1)}
         className="
       flex h-full w-11 cursor-pointer
       items-center justify-center
       transition hover:bg-[#f5f5f5]
       disabled:cursor-not-allowed
       disabled:opacity-30
      ">
         <FaMinus size={11} />
        </button>

        <span className="flex h-full min-w-[46px] items-center justify-center border-x border-[#dededb] text-sm font-medium">{item.quantity}</span>

        <button
         type="button"
         onClick={() => updateQuantity(item.id, item.quantity + 1)}
         className="
       flex h-full w-11 cursor-pointer
       items-center justify-center
       transition hover:bg-[#f5f5f5]
      ">
         <FaPlus size={11} />
        </button>
       </div>
      </div>
     ))}
    </div>

    {/* MAX QUANTITY MESSAGE */}

    {quantityMessage && <p className="mt-4 text-xs text-red-500">{quantityMessage}</p>}

    {/* PRICE */}

    <div className="mt-6 border-t border-[#dededb] pt-4">
     {/* SUBTOTAL */}

     <div className="flex justify-between py-2 text-sm">
      <span>
       Subtotal ({totalQuantity} {totalQuantity === 1 ? "item" : "items"})
      </span>

      <span>RM {formatPrice(totalPrice)}</span>
     </div>

     {/* DELIVERY */}

     <div className="flex justify-between py-2 text-sm">
      <span>Delivery</span>

      <span>Complimentary</span>
     </div>

     {/* TOTAL */}

     <div className="mt-2 flex items-center justify-between border-t border-[#dededb] pt-4">
      <span className="text-lg">Total</span>

      <div className="text-right">
       <div className="font-semibold">RM {formatPrice(totalPrice)}</div>

       <span className="text-xs text-[#777]">Inclusive of GST</span>
      </div>
     </div>
    </div>
   </section>

   {/* ==========================================
          CHECKOUT FORM
      ========================================== */}

   <form onSubmit={handleSubmit} className="p-5 md:p-8">
    <div className="space-y-5">
     {/* FULL NAME */}

     <div>
      <label className="mb-2 ml-2 block text-sm font-semibold">
       Full name <span className="text-red-500">*</span>
      </label>

      <input
       type="text"
       name="fullName"
       value={formData.fullName}
       onChange={handleChange}
       placeholder="Enter your full name"
       required
       className="
                h-14
                w-full
                border
                border-[#d8d8d8]
                bg-white
                px-5
                text-base
                outline-none
                transition
                placeholder:text-[#8a8a8a]
                focus:border-[#127749]
              "
      />
     </div>

     {/* PHONE + EMAIL */}

     <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div>
       <label className="mb-2 ml-2 block text-sm font-semibold">
        Phone number <span className="text-red-500">*</span>
       </label>

       <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
        required
        className="
                  h-14
                  w-full
                  border
                  border-[#d8d8d8]
                  bg-white
                  px-5
                  text-base
                  outline-none
                  transition
                  placeholder:text-[#8a8a8a]
                  focus:border-[#127749]
                "
       />
      </div>

      <div>
       <label className="mb-2 ml-2 block text-sm font-semibold">
        Email <span className="text-red-500">*</span>
       </label>

       <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
        className="
                  h-14
                  w-full
                  border
                  border-[#d8d8d8]
                  bg-white
                  px-5
                  text-base
                  outline-none
                  transition
                  placeholder:text-[#8a8a8a]
                  focus:border-[#127749]
                "
       />
      </div>
     </div>

     {/* ADDRESS */}

     <div>
      <label className="mb-2 ml-2 block text-sm font-semibold">
       Address <span className="text-red-500">*</span>
      </label>

      <input
       type="text"
       name="address"
       value={formData.address}
       onChange={handleChange}
       placeholder="Enter your address"
       required
       className="
                h-14
                w-full
                border
                border-[#d8d8d8]
                bg-white
                px-5
                text-base
                outline-none
                transition
                placeholder:text-[#8a8a8a]
                focus:border-[#127749]
              "
      />
     </div>

     {/* PROVINCE + DISTRICT */}

     <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div>
       <label className="mb-2 ml-2 block text-sm font-semibold">
        Province <span className="text-red-500">*</span>
       </label>

       <select
        name="province"
        value={formData.province}
        onChange={handleChange}
        required
        className="
                  h-14
                  w-full
                  cursor-pointer
                  border
                  border-[#d8d8d8]
                  bg-white
                  px-5
                  text-base
                  outline-none
                  transition
                  focus:border-[#127749]
                ">
        <option value="">Select province</option>

        {provinces.map((province: any) => (
         <option key={province.name} value={province.name}>
          {province.name}
         </option>
        ))}
       </select>
      </div>

      <div>
       <label className="mb-2 ml-2 block text-sm font-semibold">
        District <span className="text-red-500">*</span>
       </label>

       <select
        name="district"
        value={formData.district}
        onChange={handleChange}
        required
        disabled={!formData.province}
        className="
                  h-14
                  w-full
                  cursor-pointer
                  border
                  border-[#d8d8d8]
                  bg-white
                  px-5
                  text-base
                  outline-none
                  transition
                  disabled:cursor-not-allowed
                  disabled:bg-[#f5f5f5]
                  focus:border-[#127749]
                ">
        <option value="">Select district</option>

        {districts.map((district: any) => (
         <option key={district.name} value={district.name}>
          {district.name}
         </option>
        ))}
       </select>
      </div>
     </div>

     {/* ZIPCODE */}

     <div className="max-w-[50%]">
      <label className="mb-2 ml-2 block text-sm font-semibold">
       Zipcode <span className="text-red-500">*</span>
      </label>

      <select
       name="zipcode"
       value={formData.zipcode}
       onChange={handleChange}
       required
       disabled={!formData.district}
       className="
                h-14
                w-full
                cursor-pointer
                border
                border-[#d8d8d8]
                bg-white
                px-5
                text-base
                outline-none
                transition
                disabled:cursor-not-allowed
                disabled:bg-[#f5f5f5]
                focus:border-[#127749]
              ">
       <option value="">Select zipcode</option>

       {zipcodes.map((zipcode: any) => {
        const value = typeof zipcode === "string" ? zipcode : zipcode.name;

        return (
         <option key={value} value={value}>
          {value}
         </option>
        );
       })}
      </select>
     </div>

     {/* SUBMIT */}

     <div className="flex justify-end pt-3">
      <button
       type="submit"
       disabled={isSubmitting}
       className="
                mb-2
                min-w-[220px]
                bg-[#127749]
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-[#0d5f39]
                disabled:cursor-not-allowed
                disabled:opacity-60
              ">
       {isSubmitting ? "Submitting..." : "Continue to payment"}
      </button>
     </div>
    </div>
   </form>
  </div>
 );
}
