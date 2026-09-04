"use client";

import { useEffect, useState } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Link from "next/link";
export default function CartHeader() {
 const [cart, setCart] = useState<any[]>([]);

 const getCartFromStorage = () => {
  const savedCart = localStorage.getItem("rolex_cart");

  if (savedCart) {
   setCart(JSON.parse(savedCart));
  } else {
   setCart([]);
  }
 };

 useEffect(() => {
  // Lấy dữ liệu lần đầu
  getCartFromStorage();

  // Khi Add to Cart được bấm
  window.addEventListener("cartUpdated", getCartFromStorage);

  return () => {
   window.removeEventListener("cartUpdated", getCartFromStorage);
  };
 }, []);

 const cartQuantity = cart.reduce((total, item) => total + (item.quantity || 0), 0);

 return (
  <Link href="/order/cart" className="relative flex items-center justify-center gap-1">
   <div className="relative">
    <LiaShoppingCartSolid size={26} />

    {cartQuantity > 0 && (
     <div className="absolute -right-2 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-[var(--primary-color)]">
      <span className="text-[6px] text-white">{cartQuantity}</span>
     </div>
    )}
   </div>

   <span className="hidden lg:block">Cart</span>
  </Link>
 );
}
