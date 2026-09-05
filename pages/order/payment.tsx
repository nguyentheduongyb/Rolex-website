"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { FaLock, FaTruck, FaShieldAlt, FaCrown, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCreditCard, FaUniversity, FaCheck } from "react-icons/fa";

interface OrderItem {
 id: string;
 name: string;
 title?: string;
 slug?: string;
 quantity: number;
 price?: number;
 priceNew?: number;
 currency?: string;
 image?: string;
 images?: {
  main?: string;
 };
}

interface CustomerInfo {
 fullName?: string;
 phone?: string;
 email?: string;
 address?: string;
 province?: string;
 district?: string;
 zipcode?: string;
}

interface OrderData {
 orderId: string;
 customer: CustomerInfo;
 items: OrderItem[];
 createdAt?: string;
 paymentMethod?: string;
}

const Payment = () => {
 const router = useRouter();

 const [order, setOrder] = useState<OrderData | null>(null);
 const [isLoaded, setIsLoaded] = useState(false);

 const [paymentMethod, setPaymentMethod] = useState<"cod" | "bank">("cod");

 // POPUP PAYMENT NOTICE
 const [showPaymentNotice, setShowPaymentNotice] = useState(false);

 /* =========================================================
    LOAD ORDER
 ========================================================= */

 useEffect(() => {
  try {
   const savedOrder = localStorage.getItem("rolex_last_order");

   if (savedOrder) {
    const parsedOrder = JSON.parse(savedOrder);

    setOrder(parsedOrder);
   }
  } catch (error) {
   console.error("Cannot load payment information:", error);
  } finally {
   setIsLoaded(true);
  }
 }, []);

 /* =========================================================
    CALCULATE TOTAL
 ========================================================= */

 const subtotal = useMemo(() => {
  if (!order) return 0;

  return order.items.reduce((total, item) => {
   const price = item.priceNew || item.price || 0;

   return total + price * (item.quantity || 1);
  }, 0);
 }, [order]);

 const totalQuantity = useMemo(() => {
  if (!order) return 0;

  return order.items.reduce((total, item) => {
   return total + (item.quantity || 0);
  }, 0);
 }, [order]);

 /* =========================================================
    GENERATE ORDER NUMBER
 ========================================================= */

 const generateOrderNumber = () => {
  const timestamp = Date.now().toString().slice(-8);

  const random = Math.floor(1000 + Math.random() * 9000);

  return `RLX-${timestamp}-${random}`;
 };

 /* =========================================================
    PLACE ORDER
 ========================================================= */

 const handlePlaceOrder = () => {
  if (!order) return;

  /* =============================================
     BANK PAYMENT
  ============================================= */

  if (paymentMethod === "bank") {
   setShowPaymentNotice(true);

   return;
  }

  /* =============================================
     CREATE ORDER NUMBER
  ============================================= */

  const orderNumber = order.orderId && order.orderId.trim() !== "" ? order.orderId : generateOrderNumber();

  /* =============================================
     CREATE COMPLETED ORDER
  ============================================= */

  const completedOrder: OrderData = {
   ...order,

   orderId: orderNumber,

   paymentMethod: "Cash on Delivery",

   createdAt: order.createdAt || new Date().toISOString(),
  };

  /* =============================================
     SAVE LAST ORDER

     Dùng cho trang:
     /order/success
  ============================================= */

  localStorage.setItem("rolex_last_order", JSON.stringify(completedOrder));

  /* =============================================
     SAVE ALL ORDERS

     LocalStorage:
     rolex_orders

     Cấu trúc:

     [
      order 1,
      order 2,
      order 3
     ]
  ============================================= */

  try {
   const savedOrders = localStorage.getItem("rolex_orders");

   let orders: OrderData[] = [];

   if (savedOrders) {
    const parsedOrders = JSON.parse(savedOrders);

    if (Array.isArray(parsedOrders)) {
     orders = parsedOrders;
    }
   }

   /* =============================================
      CHECK DUPLICATE ORDER

      Tránh việc click Place order nhiều lần
   ============================================= */

   const existingOrderIndex = orders.findIndex((item) => item.orderId === completedOrder.orderId);

   if (existingOrderIndex >= 0) {
    orders[existingOrderIndex] = completedOrder;
   } else {
    orders.unshift(completedOrder);
   }

   localStorage.setItem("rolex_orders", JSON.stringify(orders));
  } catch (error) {
   console.error("Cannot save order history:", error);
  }

  /* =============================================
     OPTIONAL:
     CLEAR CART

     Sau khi đặt hàng thành công
  ============================================= */

  localStorage.removeItem("rolex_cart");

  /* =============================================
     UPDATE CART HEADER
  ============================================= */

  window.dispatchEvent(new Event("cartUpdated"));

  /* =============================================
     REDIRECT SUCCESS
  ============================================= */

  router.push("/order/success");
 };

 /* =========================================================
    LOADING
 ========================================================= */

 if (!isLoaded) {
  return (
   <main className="flex min-h-screen items-center justify-center bg-[#f8f8f6]">
    <p className="text-sm text-[#666]">Loading payment information...</p>
   </main>
  );
 }

 /* =========================================================
    ORDER NOT FOUND
 ========================================================= */

 if (!order) {
  return (
   <main className="flex min-h-screen items-center justify-center bg-[#f8f8f6]">
    <div className="px-6 text-center">
     <h1 className="text-2xl font-semibold">Order information not found</h1>

     <p className="mt-3 text-sm text-[#666]">We could not find your order information.</p>

     <Link
      href="/order/cart"
      className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--primary-color)] px-8 py-3 text-sm font-semibold text-white hover:opacity-90">
      Return to shopping bag
     </Link>
    </div>
   </main>
  );
 }

 const customer = order.customer || {};

 const fullAddress = [customer.address, customer.district, customer.province, customer.zipcode].filter(Boolean).join(", ");

 return (
  <main className="min-h-screen bg-[#f8f8f6] text-[#303234]">
   {/* =========================================================
       STEPS
   ========================================================= */}

   <div className="border-b border-[#dededb] bg-white">
    <div className="container">
     <div className="flex items-center justify-between gap-6 overflow-x-auto py-4 text-xs md:text-sm">
      <CheckoutStep number="1" title="Shopping bag" />

      <CheckoutStep number="2" title="Customer information" />

      <CheckoutStep number="3" title="Delivery" />

      <CheckoutStep number="4" title="Payment" current />

      <CheckoutStep number="5" title="Review and confirm" />
     </div>
    </div>
   </div>

   {/* =========================================================
       MAIN
   ========================================================= */}

   <section className="container py-10 md:py-14">
    {/* TITLE */}

    <div className="mb-10">
     <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1b553e]">Payment</span>

     <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Complete your order</h1>

     <div className="mt-4 flex items-center gap-2 text-sm text-[#666]">
      <FaLock className="text-[#1b553e]" />

      <span>Your information is secure and encrypted</span>
     </div>
    </div>

    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
     {/* =====================================================
         LEFT COLUMN
     ===================================================== */}

     <div className="space-y-8">
      {/* ===================================================
          CUSTOMER INFORMATION
      =================================================== */}

      <section className="border border-[#dededb] bg-white">
       <div className="border-b border-[#dededb] px-6 py-5 md:px-8">
        <h2 className="text-xl font-semibold">Customer information</h2>

        <p className="mt-1 text-sm text-[#777]">Delivery details for your order</p>
       </div>

       <div className="grid gap-7 p-6 md:grid-cols-2 md:p-8">
        {/* NAME */}

        <div>
         <p className="text-xs uppercase tracking-wide text-[#777]">Full name</p>

         <p className="mt-2 font-semibold">{customer.fullName || "-"}</p>
        </div>

        {/* PHONE */}

        <div className="flex gap-3">
         <FaPhone className="mt-1 text-[#1b553e]" />

         <div>
          <p className="text-xs uppercase tracking-wide text-[#777]">Phone number</p>

          <p className="mt-2 font-semibold">{customer.phone || "-"}</p>
         </div>
        </div>

        {/* EMAIL */}

        <div className="flex gap-3">
         <FaEnvelope className="mt-1 text-[#1b553e]" />

         <div>
          <p className="text-xs uppercase tracking-wide text-[#777]">Email</p>

          <p className="mt-2 break-all font-semibold">{customer.email || "-"}</p>
         </div>
        </div>

        {/* ADDRESS */}

        <div className="flex gap-3">
         <FaMapMarkerAlt className="mt-1 shrink-0 text-[#1b553e]" />

         <div>
          <p className="text-xs uppercase tracking-wide text-[#777]">Delivery address</p>

          <p className="mt-2 leading-relaxed font-semibold">{fullAddress || "-"}</p>
         </div>
        </div>
       </div>
      </section>

      {/* ===================================================
          ORDER PRODUCTS
      =================================================== */}

      <section className="border border-[#dededb] bg-white">
       {/* HEADER */}

       <div className="flex items-center justify-between border-b border-[#dededb] px-6 py-5 md:px-8">
        <div>
         <h2 className="text-xl font-semibold">Your order</h2>

         <p className="mt-1 text-sm text-[#777]">
          {totalQuantity} item
          {totalQuantity !== 1 ? "s" : ""} in your order
         </p>
        </div>
       </div>

       {/* PRODUCTS */}

       <div>
        {order.items.map((item, index) => {
         const itemPrice = item.priceNew || item.price || 0;

         const itemImage = item.image || item.images?.main || "";

         return (
          <div key={`${item.id}-${index}`} className="flex gap-4 border-b border-[#eeeeec] p-5 last:border-b-0 md:gap-7 md:p-7">
           {/* IMAGE */}

           <div className="flex h-[100px] w-[85px] shrink-0 items-center justify-center bg-[#f4f4f4] md:h-[130px] md:w-[110px]">
            {itemImage && <img src={itemImage} alt={item.name} className="h-full w-full object-contain" />}
           </div>

           {/* PRODUCT INFO */}

           <div className="flex min-w-0 flex-1 flex-col justify-between">
            <div>
             <h3 className="text-base font-semibold md:text-lg">{item.name}</h3>

             {item.title && <p className="mt-2 text-sm leading-relaxed text-[#777]">{item.title}</p>}
            </div>

            <div className="mt-5 flex items-end justify-between gap-4">
             <div>
              <p className="text-xs uppercase tracking-wide text-[#777]">Quantity</p>

              <p className="mt-1 font-semibold">{item.quantity}</p>
             </div>

             <div className="text-right">
              <p className="text-xs uppercase tracking-wide text-[#777]">Total</p>

              <p className="mt-1 font-semibold">
               {item.currency || "MYR"} {(itemPrice * item.quantity).toLocaleString()}
              </p>
             </div>
            </div>
           </div>
          </div>
         );
        })}
       </div>
      </section>

      {/* ===================================================
          PAYMENT METHOD
      =================================================== */}

      <section className="border border-[#dededb] bg-white">
       <div className="border-b border-[#dededb] px-6 py-5 md:px-8">
        <h2 className="text-xl font-semibold">Payment method</h2>

        <p className="mt-1 text-sm text-[#777]">Choose your preferred payment method</p>
       </div>

       <div className="p-5 md:p-8">
        <div className="space-y-4">
         {/* CASH ON DELIVERY */}

         <button
          type="button"
          onClick={() => {
           setPaymentMethod("cod");
          }}
          className={`flex w-full items-start gap-4 border p-5 text-left transition-all ${
           paymentMethod === "cod" ? "border-[#1b553e] bg-[#f3f7f4]" : "border-[#dededb] bg-white hover:border-[#1b553e]"
          }`}>
          <div
           className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            paymentMethod === "cod" ? "border-[#1b553e] bg-[#1b553e]" : "border-[#aaa]"
           }`}>
           {paymentMethod === "cod" && <FaCheck className="text-[9px] text-white" />}
          </div>

          <FaTruck className="mt-1 shrink-0 text-xl text-[#1b553e]" />

          <div>
           <h3 className="font-semibold">Cash on Delivery</h3>

           <p className="mt-2 text-sm leading-relaxed text-[#666]">Pay for your order when it arrives at your doorstep.</p>
          </div>
         </button>

         {/* BANK PAYMENT */}

         <button
          type="button"
          onClick={() => {
           setPaymentMethod("bank");
          }}
          className={`flex w-full items-start gap-4 border p-5 text-left transition-all ${
           paymentMethod === "bank" ? "border-[#1b553e] bg-[#f3f7f4]" : "border-[#dededb] bg-white hover:border-[#1b553e]"
          }`}>
          <div
           className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            paymentMethod === "bank" ? "border-[#1b553e] bg-[#1b553e]" : "border-[#aaa]"
           }`}>
           {paymentMethod === "bank" && <FaCheck className="text-[9px] text-white" />}
          </div>

          <FaUniversity className="mt-1 shrink-0 text-xl text-[#1b553e]" />

          <div>
           <h3 className="font-semibold">Bank payment</h3>

           <p className="mt-2 text-sm leading-relaxed text-[#666]">Pay using a Malaysian bank transfer.</p>
          </div>
         </button>
        </div>
       </div>
      </section>
     </div>

     {/* =====================================================
         RIGHT COLUMN
     ===================================================== */}

     <aside className="space-y-5">
      {/* ORDER SUMMARY */}

      <div className="border border-[#dededb] bg-white p-6 md:p-8">
       <h2 className="text-xl font-semibold">Order summary</h2>

       <div className="mt-7 space-y-5 border-b border-[#dededb] pb-6">
        <div className="flex justify-between gap-5 text-sm">
         <span className="text-[#666]">Subtotal</span>

         <span className="font-medium">MYR {subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between gap-5 text-sm">
         <span className="text-[#666]">Delivery</span>

         <span className="font-medium text-[#1b553e]">Complimentary</span>
        </div>
       </div>

       <div className="mt-6 flex items-end justify-between">
        <span className="text-base font-semibold">Total</span>

        <span className="text-xl font-semibold">MYR {subtotal.toLocaleString()}</span>
       </div>

       {/* ORDER BUTTON */}

       <button
        type="button"
        onClick={handlePlaceOrder}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[var(--primary-color)] py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">
        <FaLock />
        Place order
       </button>

       <p className="mt-4 text-center text-xs leading-relaxed text-[#777]">By placing your order, you confirm that the information provided is correct.</p>
      </div>

      {/* SECURITY */}

      <div className="border border-[#dededb] bg-white p-6">
       <div className="flex gap-4">
        <FaShieldAlt className="mt-1 shrink-0 text-xl text-[#1b553e]" />

        <div>
         <h3 className="font-semibold">Secure order</h3>

         <p className="mt-2 text-sm leading-relaxed text-[#666]">Your personal information and order details are securely protected.</p>
        </div>
       </div>
      </div>

      {/* BENEFITS */}

      <div className="border border-[#dededb] bg-white p-6">
       <div className="flex gap-4">
        <FaTruck className="mt-1 text-xl" />

        <div>
         <h3 className="text-sm font-semibold">Complimentary delivery</h3>

         <p className="mt-1 text-sm text-[#666]">Secure delivery to your address.</p>
        </div>
       </div>

       <div className="mt-6 flex gap-4">
        <FaCrown className="mt-1 text-xl" />

        <div>
         <h3 className="text-sm font-semibold">Exclusive service</h3>

         <p className="mt-1 text-sm text-[#666]">Dedicated assistance for your order.</p>
        </div>
       </div>
      </div>

      {/* BACK */}

      <Link
       href="/order/cart"
       className="flex w-full items-center justify-center rounded-full border border-[#303234] py-4 text-sm font-semibold transition-colors hover:bg-[#303234] hover:text-white">
       Return to shopping bag
      </Link>
     </aside>
    </div>
   </section>

   {/* =========================================================
       PAYMENT NOTICE MODAL
   ========================================================= */}

   {showPaymentNotice && (
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black/50 p-4">
     <div className="w-full max-w-[540px] bg-white p-6 shadow-2xl md:p-10">
      {/* ICON */}

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#edf6f0]">
       <FaCreditCard className="text-2xl text-[#1b553e]" />
      </div>

      {/* TITLE */}

      <h2 className="mt-7 text-center text-2xl font-semibold text-[#303234] md:text-3xl">Payment Method Notice</h2>

      {/* MESSAGE */}

      <p className="mx-auto mt-6 max-w-[440px] text-center text-sm leading-7 text-[#666] md:text-base">
       For your convenience, we currently offer Cash on Delivery (COD) as our available payment method. You only need to make payment when your order arrives at
       your doorstep.
      </p>

      {/* BUTTON COD */}

      <button
       type="button"
       onClick={() => {
        setShowPaymentNotice(false);

        setPaymentMethod("cod");
       }}
       className="mt-8 w-full rounded-full bg-[#1b553e] py-4 font-semibold text-white transition hover:opacity-90">
       Continue with Cash on Delivery
      </button>

      {/* CLOSE */}

      <button
       type="button"
       onClick={() => {
        setShowPaymentNotice(false);
       }}
       className="mt-4 w-full py-3 text-sm font-semibold text-[#555] transition hover:text-[#1b553e]">
       Close
      </button>
     </div>
    </div>
   )}
  </main>
 );
};

/* =========================================================
   CHECKOUT STEP
========================================================= */

interface CheckoutStepProps {
 number: string;
 title: string;
 current?: boolean;
}

const CheckoutStep = ({ number, title, current }: CheckoutStepProps) => {
 return (
  <div className="flex shrink-0 items-center gap-3">
   <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${current ? "bg-[#1b553e] text-white" : "bg-[#eeeeec] text-[#777]"}`}>
    {number}
   </span>

   <span className={`whitespace-nowrap ${current ? "font-medium text-[#1b553e]" : "text-[#666]"}`}>{title}</span>
  </div>
 );
};

Payment.Layout = "Default";

export default Payment;
