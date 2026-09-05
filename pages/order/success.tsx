"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaCheck, FaBox, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaShieldAlt } from "react-icons/fa";

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
}

const OrderSuccess = () => {
 const router = useRouter();

 const [order, setOrder] = useState<OrderData | null>(null);
 const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
  try {
   const savedOrder = localStorage.getItem("rolex_last_order");

   if (savedOrder) {
    const parsedOrder = JSON.parse(savedOrder);

    setOrder(parsedOrder);
   }
  } catch (error) {
   console.error("Cannot load order:", error);
  } finally {
   setIsLoaded(true);
  }
 }, []);

 const subtotal = useMemo(() => {
  if (!order) return 0;

  return order.items.reduce((total, item) => {
   const price = item.priceNew || item.price || 0;

   return total + price * (item.quantity || 1);
  }, 0);
 }, [order]);

 const totalQuantity = useMemo(() => {
  if (!order) return 0;

  return order.items.reduce((total, item) => total + (item.quantity || 0), 0);
 }, [order]);

 if (!isLoaded) {
  return (
   <main className="flex min-h-screen items-center justify-center bg-[#f8f8f6]">
    <p className="text-sm text-[#666]">Loading your order...</p>
   </main>
  );
 }

 if (!order) {
  return (
   <main className="flex min-h-screen items-center justify-center bg-[#f8f8f6]">
    <div className="text-center">
     <h1 className="text-2xl font-semibold">Order not found</h1>

     <p className="mt-3 text-sm text-[#666]">We could not find your order information.</p>

     <Link
      href="/"
      className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--primary-color)] px-8 py-3 text-sm font-semibold text-white hover:opacity-90">
      Return to homepage
     </Link>
    </div>
   </main>
  );
 }

 const customer = order.customer;

 const fullAddress = [customer.address, customer.district, customer.province, customer.zipcode].filter(Boolean).join(", ");

 return (
  <main className="min-h-screen bg-[#f8f8f6] text-[#303234]">
   {/* =====================================================
       SUCCESS HERO
   ===================================================== */}

   <section className="border-b border-[#dededb] bg-white">
    <div className="container py-12 md:py-20">
     <div className="mx-auto max-w-[700px] text-center">
      {/* ICON */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1b553e] text-white md:h-20 md:w-20">
       <FaCheck className="text-2xl md:text-3xl" />
      </div>

      <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#1b553e]">Order confirmed</p>

      <h1 className="mt-4 text-3xl font-semibold md:text-5xl">Thank you for your order</h1>

      <p className="mx-auto mt-5 max-w-[560px] text-sm leading-relaxed text-[#666] md:text-base">
       Your order has been successfully received. Our team will contact you shortly to confirm the details of your order.
      </p>

      {/* ORDER NUMBER */}
      <div className="mt-8 inline-flex flex-col items-center border border-[#dededb] bg-[#f8f8f6] px-8 py-5">
       <span className="text-xs uppercase tracking-wide text-[#777]">Order number</span>

       <strong className="mt-2 text-lg tracking-wide text-[#1b553e]">{order.orderId}</strong>
      </div>
     </div>
    </div>
   </section>

   {/* =====================================================
       MAIN CONTENT
   ===================================================== */}

   <section className="container py-10 md:py-16">
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
     {/* =================================================
         LEFT
     ================================================= */}

     <div className="space-y-8">
      {/* =============================================
          CUSTOMER INFORMATION
      ============================================= */}

      <section className="border border-[#dededb] bg-white">
       <div className="border-b border-[#dededb] px-6 py-5 md:px-8">
        <div className="flex items-center gap-3">
         <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f5f2] text-[#1b553e]">
          <FaBox />
         </div>

         <div>
          <h2 className="text-lg font-semibold">Delivery information</h2>

          <p className="mt-1 text-sm text-[#777]">Customer and delivery details</p>
         </div>
        </div>
       </div>

       <div className="grid gap-7 p-6 md:grid-cols-2 md:p-8">
        {/* FULL NAME */}

        <div>
         <p className="text-xs uppercase tracking-wide text-[#777]">Full name</p>

         <p className="mt-2 font-medium">{customer.fullName || "-"}</p>
        </div>

        {/* PHONE */}

        <div className="flex gap-3">
         <FaPhone className="mt-1 text-[#1b553e]" />

         <div>
          <p className="text-xs uppercase tracking-wide text-[#777]">Phone number</p>

          <p className="mt-2 font-medium">{customer.phone || "-"}</p>
         </div>
        </div>

        {/* EMAIL */}

        <div className="flex gap-3">
         <FaEnvelope className="mt-1 text-[#1b553e]" />

         <div>
          <p className="text-xs uppercase tracking-wide text-[#777]">Email</p>

          <p className="mt-2 break-all font-medium">{customer.email || "-"}</p>
         </div>
        </div>

        {/* ADDRESS */}

        <div className="flex gap-3">
         <FaMapMarkerAlt className="mt-1 shrink-0 text-[#1b553e]" />

         <div>
          <p className="text-xs uppercase tracking-wide text-[#777]">Delivery address</p>

          <p className="mt-2 leading-relaxed font-medium">{fullAddress || "-"}</p>
         </div>
        </div>
       </div>
      </section>

      {/* =============================================
          ORDER ITEMS
      ============================================= */}

      <section className="border border-[#dededb] bg-white">
       {/* HEADER */}

       <div className="flex items-center justify-between border-b border-[#dededb] px-6 py-5 md:px-8">
        <div>
         <h2 className="text-lg font-semibold">Your order</h2>

         <p className="mt-1 text-sm text-[#777]">
          {totalQuantity} item{totalQuantity !== 1 ? "s" : ""}
         </p>
        </div>

        <span className="text-sm text-[#777]">
         {order.items.length} product
         {order.items.length !== 1 ? "s" : ""}
        </span>
       </div>

       {/* PRODUCTS */}

       <div>
        {order.items.map((item, index) => {
         const itemPrice = item.priceNew || item.price || 0;

         const itemImage = item.image || item.images?.main || "";

         return (
          <div key={`${item.id}-${index}`} className="flex gap-5 border-b border-[#eeeeec] p-5 last:border-b-0 md:gap-8 md:p-8">
           {/* IMAGE */}

           <div className="flex h-[110px] w-[90px] shrink-0 items-center justify-center bg-[#f4f4f4] md:h-[150px] md:w-[120px]">
            {itemImage && <img src={itemImage} alt={item.name} className="h-full w-full object-contain" />}
           </div>

           {/* PRODUCT INFO */}

           <div className="flex min-w-0 flex-1 flex-col justify-between">
            <div>
             <h3 className="text-base font-semibold md:text-lg">{item.name}</h3>

             {item.title && <p className="mt-2 text-sm leading-relaxed text-[#777]">{item.title}</p>}
            </div>

            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
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
     </div>

     {/* =================================================
         RIGHT
     ================================================= */}

     <aside className="space-y-5">
      {/* ORDER SUMMARY */}

      <div className="border border-[#dededb] bg-white p-6 md:p-8">
       <h2 className="text-lg font-semibold">Order summary</h2>

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
      </div>

      {/* SECURITY */}

      <div className="border border-[#dededb] bg-white p-6">
       <div className="flex gap-4">
        <FaShieldAlt className="mt-1 shrink-0 text-xl text-[#1b553e]" />

        <div>
         <h3 className="font-semibold">Your order is secure</h3>

         <p className="mt-2 text-sm leading-relaxed text-[#666]">Your order information has been successfully received and will be handled securely.</p>
        </div>
       </div>
      </div>

      {/* ACTIONS */}

      <div className="space-y-3">
       <Link
        href="/"
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[var(--primary-color)] py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">
        Continue shopping
        <FaArrowRight className="text-xs" />
       </Link>

       <Link
        href="/order/my-orders"
        className="flex w-full items-center justify-center rounded-full border border-[#303234] py-4 text-sm font-semibold transition-colors hover:bg-[#303234] hover:text-white">
        My Orders
       </Link>
      </div>
     </aside>
    </div>
   </section>

   {/* =====================================================
       FOOTER MESSAGE
   ===================================================== */}

   <section className="border-t border-[#dededb] bg-white">
    <div className="container py-10 text-center md:py-14">
     <h2 className="text-xl font-semibold">Thank you for choosing us</h2>

     <p className="mx-auto mt-4 max-w-[600px] text-sm leading-relaxed text-[#666]">
      We appreciate your trust. Our team will review your order and contact you shortly regarding the next steps.
     </p>
    </div>
   </section>
  </main>
 );
};

OrderSuccess.Layout = "Default";

export default OrderSuccess;
