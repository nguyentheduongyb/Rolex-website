"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
 FaBox,
 FaPhone,
 FaEnvelope,
 FaMapMarkerAlt,
 FaTruck,
 FaShieldAlt,
 FaArrowRight,
 FaShoppingBag,
 FaCheckCircle,
 FaCalendarAlt,
 FaChevronDown,
 FaChevronUp,
} from "react-icons/fa";

/* =========================================================
   TYPES
========================================================= */

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

/* =========================================================
   COMPONENT
========================================================= */

const MyOrders = () => {
 const [orders, setOrders] = useState<OrderData[]>([]);
 const [isLoaded, setIsLoaded] = useState(false);

 const [openOrder, setOpenOrder] = useState<string | null>(null);

 /* =========================================================
    LOAD ORDERS
 ========================================================= */

 useEffect(() => {
  try {
   const savedOrders = localStorage.getItem("rolex_orders");

   if (savedOrders) {
    const parsedOrders = JSON.parse(savedOrders);

    if (Array.isArray(parsedOrders)) {
     const sortedOrders = [...parsedOrders].sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;

      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

      return dateB - dateA;
     });

     setOrders(sortedOrders);

     /* MỞ ĐƠN HÀNG ĐẦU TIÊN */

     if (sortedOrders.length > 0) {
      setOpenOrder(sortedOrders[0].orderId);
     }
    }
   }
  } catch (error) {
   console.error("Cannot load orders:", error);

   setOrders([]);
  } finally {
   setIsLoaded(true);
  }
 }, []);

 /* =========================================================
    LOADING
 ========================================================= */

 if (!isLoaded) {
  return (
   <main className="flex min-h-screen items-center justify-center bg-[#f8f8f6]">
    <div className="text-center">
     <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#dededb] border-t-[#1b553e]" />

     <p className="mt-5 text-sm text-[#666]">Loading your orders...</p>
    </div>
   </main>
  );
 }

 /* =========================================================
    EMPTY STATE
 ========================================================= */

 if (orders.length === 0) {
  return (
   <main className="min-h-screen bg-[#f8f8f6] text-[#303234]">
    {/* HERO */}

    <section className="border-b border-[#dededb] bg-white">
     <div className="container py-14 text-center md:py-20">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1b553e]">My account</span>

      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">My orders</h1>

      <p className="mx-auto mt-5 max-w-[560px] text-sm leading-relaxed text-[#666] md:text-base">View and manage all of your orders in one place.</p>
     </div>
    </section>

    {/* EMPTY */}

    <section className="container py-16 md:py-24">
     <div className="mx-auto max-w-[600px] border border-[#dededb] bg-white px-6 py-14 text-center md:px-12 md:py-20">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f3f5f2] text-[#1b553e]">
       <FaShoppingBag className="text-3xl" />
      </div>

      <h2 className="mt-7 text-2xl font-semibold">No orders yet</h2>

      <p className="mx-auto mt-4 max-w-[420px] text-sm leading-relaxed text-[#666]">
       You have not placed any orders yet. Discover our collection and find your next exceptional timepiece.
      </p>

      <Link
       href="/"
       className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[var(--primary-color)] px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
       Continue shopping
       <FaArrowRight className="text-xs" />
      </Link>
     </div>
    </section>
   </main>
  );
 }

 /* =========================================================
    RENDER
 ========================================================= */

 return (
  <main className="min-h-screen bg-[#f8f8f6] text-[#303234]">
   {/* =====================================================
       HERO
   ===================================================== */}

   <section className="border-b border-[#dededb] bg-white">
    <div className="container py-12 md:py-20">
     <div className="max-w-[720px]">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1b553e]">My account</span>

      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">My orders</h1>

      <p className="mt-5 max-w-[600px] text-sm leading-relaxed text-[#666] md:text-base">
       View all your orders and review your delivery information and purchased products.
      </p>

      <div className="mt-8 flex items-center gap-4">
       <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f5f2] text-[#1b553e]">
        <FaBox />
       </div>

       <div>
        <p className="text-2xl font-semibold">{orders.length}</p>

        <p className="text-sm text-[#777]">Order{orders.length !== 1 ? "s" : ""} placed</p>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* =====================================================
       ORDERS
   ===================================================== */}

   <section className="container py-10 md:py-16">
    <div className="mx-auto max-w-[1100px] space-y-6">
     {orders.map((order) => {
      const customer = order.customer || {};

      const isOpen = openOrder === order.orderId;

      const totalQuantity = order.items.reduce((total, item) => total + (item.quantity || 0), 0);

      const subtotal = order.items.reduce((total, item) => {
       const price = item.priceNew || item.price || 0;

       return total + price * (item.quantity || 1);
      }, 0);

      const fullAddress = [customer.address, customer.district, customer.province, customer.zipcode].filter(Boolean).join(", ");

      const formattedDate = order.createdAt
       ? new Date(order.createdAt).toLocaleDateString("en-MY", {
          day: "2-digit",
          month: "long",
          year: "numeric",
         })
       : "—";

      return (
       <article key={order.orderId} className="overflow-hidden border border-[#dededb] bg-white">
        {/* =================================================
            ORDER HEADER
        ================================================= */}

        <button
         type="button"
         onClick={() => setOpenOrder(isOpen ? null : order.orderId)}
         className="flex w-full flex-col gap-5 p-5 text-left transition hover:bg-[#fafaf8] md:flex-row md:items-center md:justify-between md:p-8">
         {/* LEFT */}

         <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3f5f2] text-[#1b553e]">
           <FaBox />
          </div>

          <div>
           <p className="text-xs uppercase tracking-[0.12em] text-[#777]">Order number</p>

           <h2 className="mt-2 text-lg font-semibold text-[#1b553e] md:text-xl">{order.orderId}</h2>

           <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#777]">
            <span className="flex items-center gap-2">
             <FaCalendarAlt />

             {formattedDate}
            </span>

            <span>
             {totalQuantity} item
             {totalQuantity !== 1 ? "s" : ""}
            </span>
           </div>
          </div>
         </div>

         {/* RIGHT */}

         <div className="flex items-center justify-between gap-5 md:justify-end">
          <div className="text-left md:text-right">
           <p className="text-xs uppercase tracking-wide text-[#777]">Order total</p>

           <p className="mt-2 text-lg font-semibold">MYR {subtotal.toLocaleString()}</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center text-[#1b553e]">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
         </div>
        </button>

        {/* =================================================
            STATUS
        ================================================= */}

        <div className="border-t border-[#eeeeec] bg-[#fafbf9] px-5 py-4 md:px-8">
         <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
           <FaCheckCircle className="text-[#1b553e]" />

           <span className="text-sm font-medium text-[#1b553e]">Order successfully placed</span>
          </div>

          <span className="text-sm text-[#666]">Payment: {order.paymentMethod || "Cash on Delivery"}</span>
         </div>
        </div>

        {/* =================================================
            ORDER DETAILS
        ================================================= */}

        {isOpen && (
         <div className="border-t border-[#dededb]">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_340px]">
           {/* =============================================
               PRODUCTS
           ============================================= */}

           <div className="border-b border-[#dededb] lg:border-b-0 lg:border-r">
            {/* TITLE */}

            <div className="border-b border-[#dededb] px-5 py-5 md:px-8">
             <h3 className="text-xl font-semibold">Ordered products</h3>

             <p className="mt-1 text-sm text-[#777]">
              {order.items.length} product
              {order.items.length !== 1 ? "s" : ""}
             </p>
            </div>

            {/* PRODUCTS */}

            <div>
             {order.items.map((item, index) => {
              const itemPrice = item.priceNew || item.price || 0;

              const itemImage = item.image || item.images?.main || "";

              return (
               <div key={`${item.id}-${index}`} className="flex gap-4 border-b border-[#eeeeec] p-5 last:border-b-0 md:gap-7 md:p-8">
                {/* IMAGE */}

                <div className="flex h-[110px] w-[90px] shrink-0 items-center justify-center bg-[#f4f4f4] md:h-[150px] md:w-[120px]">
                 {itemImage ? <img src={itemImage} alt={item.name} className="h-full w-full object-contain" /> : <FaBox className="text-2xl text-[#bbb]" />}
                </div>

                {/* INFO */}

                <div className="flex min-w-0 flex-1 flex-col justify-between">
                 <div>
                  <h4 className="text-base font-semibold md:text-lg">{item.name}</h4>

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
                    {item.currency || "MYR"} {(itemPrice * (item.quantity || 1)).toLocaleString()}
                   </p>
                  </div>
                 </div>
                </div>
               </div>
              );
             })}
            </div>
           </div>

           {/* =============================================
               CUSTOMER INFORMATION
           ============================================= */}

           <aside className="bg-[#fafaf8]">
            <div className="border-b border-[#dededb] px-5 py-5 md:px-7">
             <h3 className="text-xl font-semibold">Delivery information</h3>

             <p className="mt-1 text-sm text-[#777]">Customer details</p>
            </div>

            <div className="space-y-7 p-5 md:p-7">
             {/* NAME */}

             <div>
              <p className="text-xs uppercase tracking-wide text-[#777]">Full name</p>

              <p className="mt-2 font-semibold">{customer.fullName || "-"}</p>
             </div>

             {/* PHONE */}

             <div className="flex gap-3">
              <FaPhone className="mt-1 shrink-0 text-[#1b553e]" />

              <div>
               <p className="text-xs uppercase tracking-wide text-[#777]">Phone number</p>

               <p className="mt-2 font-semibold">{customer.phone || "-"}</p>
              </div>
             </div>

             {/* EMAIL */}

             <div className="flex gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-[#1b553e]" />

              <div className="min-w-0">
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

             {/* PAYMENT */}

             <div className="border-t border-[#dededb] pt-6">
              <p className="text-xs uppercase tracking-wide text-[#777]">Payment method</p>

              <p className="mt-2 flex items-center gap-3 font-semibold">
               <FaTruck className="text-[#1b553e]" />

               {order.paymentMethod || "Cash on Delivery"}
              </p>
             </div>
            </div>
           </aside>
          </div>

          {/* =================================================
              TOTAL
          ================================================= */}

          <div className="border-t border-[#dededb] bg-white px-5 py-6 md:px-8">
           <div className="ml-auto max-w-[380px]">
            <div className="flex justify-between gap-5 text-sm">
             <span className="text-[#666]">Subtotal</span>

             <span className="font-medium">MYR {subtotal.toLocaleString()}</span>
            </div>

            <div className="mt-4 flex justify-between gap-5 text-sm">
             <span className="text-[#666]">Delivery</span>

             <span className="font-medium text-[#1b553e]">Complimentary</span>
            </div>

            <div className="mt-5 flex justify-between border-t border-[#dededb] pt-5">
             <span className="text-lg font-semibold">Total</span>

             <span className="text-xl font-semibold">MYR {subtotal.toLocaleString()}</span>
            </div>
           </div>
          </div>
         </div>
        )}
       </article>
      );
     })}
    </div>

    {/* =====================================================
        CONTINUE SHOPPING
    ===================================================== */}

    <div className="mt-10 text-center md:mt-14">
     <Link
      href="/"
      className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--primary-color)] px-9 py-4 text-sm font-semibold text-white transition hover:opacity-90">
      Continue shopping
      <FaArrowRight className="text-xs" />
     </Link>
    </div>
   </section>

   {/* =====================================================
       FOOTER BENEFITS
   ===================================================== */}

   <section className="border-t border-[#dededb] bg-white">
    <div className="container grid gap-8 py-10 md:grid-cols-3 md:py-14">
     <Benefit icon={<FaTruck />} title="Complimentary delivery" text="Secure delivery directly to your address." />

     <Benefit icon={<FaShieldAlt />} title="Secure order" text="Your order information is securely protected." />

     <Benefit icon={<FaCheckCircle />} title="Order confirmation" text="Your order history is always available here." />
    </div>
   </section>
  </main>
 );
};

/* =========================================================
   BENEFIT COMPONENT
========================================================= */

interface BenefitProps {
 icon: React.ReactNode;
 title: string;
 text: string;
}

const Benefit = ({ icon, title, text }: BenefitProps) => {
 return (
  <div className="flex items-start gap-4">
   <div className="mt-1 text-xl text-[#1b553e]">{icon}</div>

   <div>
    <h3 className="font-semibold">{title}</h3>

    <p className="mt-2 text-sm leading-relaxed text-[#666]">{text}</p>
   </div>
  </div>
 );
};

MyOrders.Layout = "Default";

export default MyOrders;
