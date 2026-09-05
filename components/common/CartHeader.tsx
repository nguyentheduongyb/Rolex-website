"use client";

import { useEffect, useState } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function CartHeader() {
 const [cart, setCart] = useState<any[]>([]);
 const [isOpen, setIsOpen] = useState(false);

 const getCartFromStorage = () => {
  const savedCart = localStorage.getItem("rolex_cart");

  if (savedCart) {
   try {
    setCart(JSON.parse(savedCart));
   } catch {
    setCart([]);
   }
  } else {
   setCart([]);
  }
 };

 useEffect(() => {
  // Lấy cart lần đầu
  getCartFromStorage();

  // Chỉ cập nhật số lượng, KHÔNG mở popper
  const handleCartUpdated = () => {
   getCartFromStorage();
  };

  // Chỉ mở popper khi Add to Cart
  const handleCartAdded = () => {
   getCartFromStorage();
   setIsOpen(true);
  };

  window.addEventListener("cartUpdated", handleCartUpdated);
  window.addEventListener("cartAdded", handleCartAdded);

  return () => {
   window.removeEventListener("cartUpdated", handleCartUpdated);
   window.removeEventListener("cartAdded", handleCartAdded);
  };
 }, []);

 const cartQuantity = cart.reduce((total, item) => total + (item.quantity || 0), 0);

 return (
  <div className="relative z-[9999999999999]">
   {/* CART BUTTON */}
   <button type="button" onClick={() => setIsOpen((prev) => !prev)} className="relative flex items-center justify-center gap-1">
    <div className="relative">
     <LiaShoppingCartSolid size={26} />

     {cartQuantity > 0 && (
      <div className="absolute -right-2 -top-1 z-[99999] flex h-3 w-3 items-center justify-center rounded-full bg-[var(--primary-color)]">
       <span className="text-[6px] text-white">{cartQuantity}</span>
      </div>
     )}
    </div>

    <span className="hidden lg:block">Cart</span>
   </button>

   {/* OVERLAY MOBILE */}
   {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-[9998] bg-black/20 md:hidden" />}

   {/* CART POPPER */}
   {isOpen && (
    <div className="fixed inset-0 z-[99999] bg-white shadow-2xl md:absolute md:inset-auto md:right-0 md:top-[calc(100%+15px)] md:w-[420px]">
     {/* HEADER */}
     <div className="flex items-center justify-between border-b border-gray-200 p-5 md:p-6">
      <div>
       <h2 className="text-xl font-bold">Your Cart</h2>

       <p className="mt-1 text-sm text-gray-500">
        {cartQuantity} item{cartQuantity !== 1 ? "s" : ""} in your cart
       </p>
      </div>

      {/* CLOSE */}
      <button type="button" onClick={() => setIsOpen(false)} className="flex h-10 w-10 items-center justify-center" aria-label="Close cart">
       <IoClose size={26} />
      </button>
     </div>

     {/* CART PRODUCTS */}
     <div className="max-h-[calc(100vh-190px)] overflow-y-auto p-5 md:max-h-[450px] md:p-6">
      {cart.length === 0 ? (
       <div className="py-16 text-center">
        <LiaShoppingCartSolid size={50} className="mx-auto text-gray-300" />

        <p className="mt-4 text-gray-500">Your cart is empty</p>
       </div>
      ) : (
       <div className="space-y-5">
        {cart.map((item, index) => (
         <div key={`${item.id}-${index}`} className="flex gap-4 border-b border-gray-100 pb-5">
          {/* IMAGE */}
          <div
           className="h-24 w-20 shrink-0 bg-contain bg-center bg-no-repeat"
           style={{
            backgroundImage: `url(${item.image || item.images?.main || ""})`,
           }}
          />

          {/* INFO */}
          <div className="min-w-0 flex-1">
           <h3 className="text-sm font-bold">{item.name}</h3>

           {item.title && <p className="mt-1 text-xs text-gray-500">{item.title}</p>}

           <div className="mt-3 flex items-center justify-between">
            <span className="text-sm text-gray-500">Qty: {item.quantity}</span>

            <span className="text-sm font-bold">
             {item.currency} {((item.priceNew || item.price || 0) * (item.quantity || 1)).toLocaleString()}
            </span>
           </div>
          </div>
         </div>
        ))}
       </div>
      )}
     </div>

     {/* FOOTER */}
     {cart.length > 0 && (
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-5 md:static md:p-6">
       <Link
        href="/order/cart"
        onClick={() => setIsOpen(false)}
        className="flex w-full items-center justify-center rounded-full bg-[var(--primary-color)] py-3 font-bold text-white hover:opacity-90">
        View Cart
       </Link>
      </div>
     )}
    </div>
   )}
  </div>
 );
}
