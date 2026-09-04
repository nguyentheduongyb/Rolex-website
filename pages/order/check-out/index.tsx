import { useEffect, useState } from "react";

import { FaLock, FaTruck, FaShieldAlt, FaCrown } from "react-icons/fa";

import CheckoutForm from "./CheckoutForm";

import type { RolexWatch } from "~/data/rolexWatches";
interface CartItem extends RolexWatch {
 quantity: number;
}

const Checkout = () => {
 const [cartItems, setCartItems] = useState<CartItem[]>([]);
 const [isLoaded, setIsLoaded] = useState(false);

 // =========================================================
 // LOAD CART FROM LOCAL STORAGE
 // =========================================================
 useEffect(() => {
  try {
   const savedCart = localStorage.getItem("rolex_cart");

   if (savedCart) {
    const parsedCart = JSON.parse(savedCart);

    if (Array.isArray(parsedCart)) {
     setCartItems(parsedCart);
    } else {
     setCartItems([]);
    }
   } else {
    setCartItems([]);
   }
  } catch (error) {
   console.error("Cannot load checkout data:", error);
   setCartItems([]);
  } finally {
   setIsLoaded(true);
  }
 }, []);

 // =========================================================
 // LOADING
 // =========================================================
 if (!isLoaded) {
  return (
   <main className="flex min-h-screen items-center justify-center bg-[#f8f8f6]">
    <p className="text-sm text-[#666]">Loading checkout...</p>
   </main>
  );
 }

 return (
  <main className="min-h-screen bg-[#f8f8f6] text-[#303234]">
   {/* =========================================================
          STEPS
      ========================================================= */}

   <div className="border-b border-[#dededb]">
    <div className="container">
     <div className="flex flex-wrap items-center justify-between gap-8 overflow-x-auto py-4 text-xs md:text-sm">
      <CheckoutStep number="1" title="Shopping bag" active />

      <CheckoutStep number="2" title="Customer information" />

      <CheckoutStep number="3" title="Delivery" />

      <CheckoutStep number="4" title="Payment" current />

      <CheckoutStep number="5" title="Review and confirm" />
     </div>
    </div>
   </div>

   {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

   <section className="container py-10 md:py-14">
    {/* TITLE */}

    <div className="mb-8">
     <span className="text-xs font-bold uppercase tracking-wide text-[#1b553e]">Payment</span>

     <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Secure checkout</h1>

     <div className="mt-4 flex items-center gap-2 text-sm text-[#555]">
      <FaLock />

      <span>All transactions are secure and encrypted</span>
     </div>
    </div>

    {/* GRID */}

    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
     {/* =====================================================
              LEFT COLUMN
          ===================================================== */}

     <CheckoutForm watchData={cartItems} />

     {/* =====================================================
              RIGHT COLUMN
          ===================================================== */}

     <aside className="flex flex-col gap-5">
      {/* BENEFITS */}

      <div className="border border-[#dededb] bg-white p-6">
       <div className="flex gap-5">
        <FaTruck className="mt-1 text-xl" />

        <div>
         <h3 className="text-sm font-semibold">Free delivery and returns</h3>

         <p className="mt-1 text-sm text-[#666]">Complimentary delivery on all orders</p>
        </div>
       </div>

       <div className="mt-7 flex gap-5">
        <FaShieldAlt className="mt-1 text-xl" />

        <div>
         <h3 className="text-sm font-semibold">Five-year international guarantee</h3>

         <p className="mt-1 text-sm text-[#666]">A guarantee of excellence</p>
        </div>
       </div>

       <div className="mt-7 flex gap-5">
        <FaLock className="mt-1 text-xl" />

        <div>
         <h3 className="text-sm font-semibold">Secure payment</h3>

         <p className="mt-1 text-sm text-[#666]">Your payment information is encrypted</p>
        </div>
       </div>
      </div>

      {/* NEED HELP */}

      <div className="border border-[#dededb] bg-white p-8 text-center">
       <FaCrown className="mx-auto text-3xl text-[#222]" />

       <h3 className="mt-5 text-xl font-medium">Need help?</h3>

       <p className="mt-3 text-[#555]">Contact our dedicated advisors</p>

       <p className="mt-5 font-semibold">+65 6337 0066</p>

       <p className="mt-2 text-sm text-[#777]">Monday to Friday 9:00 - 18:00</p>

       <button className="mt-4 cursor-pointer text-sm font-semibold text-[#1b553e] underline">Email us</button>
      </div>

      {/* PAYMENT METHODS */}

      <div className="border border-[#dededb] bg-white p-6">
       <p className="mb-6 text-sm text-[#555]">We accept</p>

       <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
        <span className="font-bold text-[#1a4f8b]">VISA</span>

        <span className="font-bold">Mastercard</span>

        <span className="font-bold text-[#2c6e9f]">AMERICAN EXPRESS</span>

        <span className="font-bold">JCB</span>

        <span className="font-bold"> Pay</span>

        <span className="font-bold text-[#174d8a]">PayPal</span>

        <span className="font-bold text-[#1b8a58]">GrabPay</span>
       </div>
      </div>
     </aside>
    </div>
   </section>

   {/* =========================================================
          FOOTER BENEFITS
      ========================================================= */}

   <footer className="border-t border-[#dededb] bg-[#f8f8f6]">
    <div className="container grid gap-8 py-8 md:grid-cols-4">
     <FooterItem icon={<FaTruck />} title="Free delivery" text="Complimentary and secure" />

     <FooterItem icon={<FaShieldAlt />} title="Easy returns" text="Return or exchange" />

     <FooterItem icon={<FaCrown />} title="Exclusive service" text="Available in-store and online" />

     <FooterItem icon={<FaLock />} title="Secure payments" text="Safe and encrypted" />
    </div>
   </footer>
  </main>
 );
};

/* =========================================================
   CHECKOUT STEP
========================================================= */

interface CheckoutStepProps {
 number: string;
 title: string;
 active?: boolean;
 current?: boolean;
}

const CheckoutStep = ({ number, title, active, current }: CheckoutStepProps) => {
 return (
  <div className="flex shrink-0 items-center gap-3">
   <span
    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
     active ? "bg-[#1b553e] text-white" : current ? "border border-[#1b553e] text-[#1b553e]" : "bg-[#eeeeec] text-[#777]"
    }`}>
    {number}
   </span>

   <span className={`whitespace-nowrap ${active || current ? "font-medium text-[#1b553e]" : "text-[#666]"}`}>{title}</span>
  </div>
 );
};

/* =========================================================
   FOOTER ITEM
========================================================= */

interface FooterItemProps {
 icon: React.ReactNode;
 title: string;
 text: string;
}

const FooterItem = ({ icon, title, text }: FooterItemProps) => {
 return (
  <div className="flex items-start gap-4">
   <div className="mt-1 text-[#444]">{icon}</div>

   <div>
    <h4 className="text-sm font-semibold">{title}</h4>

    <p className="mt-1 text-xs text-[#666]">{text}</p>
   </div>
  </div>
 );
};

Checkout.Layout = "Default";

export default Checkout;
