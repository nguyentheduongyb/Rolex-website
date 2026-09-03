"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbMenu } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdNotifications, MdLanguage, MdLocationOn } from "react-icons/md";
import { MdNightlight, MdLightMode } from "react-icons/md";
import Search from "~/components/Search";
import Language from "~/components/popper/Language";
import { Button, Dropdown, Navbar, Avatar } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { HiHeart, HiSearch } from "react-icons/hi";

const MENU_ITEMS = [
 {
  icon: <MdLanguage />,
  title: "Tiếng Việt",
  children: {
   title: "Language",
   data: [
    {
     type: "language",
     code: "en",
     title: "English",
    },
    {
     type: "language",
     code: "vi",
     title: "Tiếng Việt",
    },
   ],
  },
 },
];

const Logo = () => {
 return <img className="h-[64px] " src="/logo.png" alt="" />;
};
const Header = () => {
 // Handle logic
 const handleMenuChange = (menuItem: any) => {
  switch (menuItem.type) {
   case "language":
    // Handle change language
    break;
   default:
  }
 };

 const [isOpenMenu, setIsOpenMenu] = useState(false);
 const [showHeader, setShowHeader] = useState(true);
 const [lastScrollY, setLastScrollY] = useState(0);
 const [isSearchOpen, setIsSearchOpen] = useState(false);
 useEffect(() => {
  const handleScroll = () => {
   const currentScrollY = window.scrollY;

   if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Kéo xuống
    setShowHeader(false);
   } else {
    // Kéo lên
    setShowHeader(true);
   }

   setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [lastScrollY]);

 return (
  <header className="w-full">
   <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
   <div
    className={`h-[68px] sticky top-0 bg-white animate-[hide-header_linear] container flex justify-between items-center transition-transform duration-500 ease-in-out sm:px-0 mx-0 bg-white ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
    {/* Menu */}
    <button onClick={() => setIsOpenMenu(true)} className="flex gap-1 justify-between items-center">
     <TbMenu size={28} />
     <span className="hidden lg:block">Menu</span>
    </button>

    {/* Logo */}
    <Link href="/" className="absolute left-1/2 -translate-x-1/2">
     <Logo />
    </Link>

    {/* Search */}
    <div className="flex gap-6">
     <button onClick={() => setIsSearchOpen(true)} className="flex items-center justify-center gap-1">
      <HiSearch size={22} />
      <span className="hidden lg:block">Search</span>
     </button>
     <button className="flex items-center justify-center gap-1">
      <MdLocationOn size={22} />
      <span className="hidden lg:block">Location</span>
     </button>
     <button className="flex items-center justify-center gap-1">
      <HiHeart size={22} />
      <span className="hidden lg:block">Favourites</span>
     </button>
    </div>
   </div>

   {/* Menu hidden */}
   <div
    className={`fixed z-[999999] top-0 left-0 h-full bg-white
    transition-transform duration-500 ease-in-out
    ${isOpenMenu ? "translate-x-0" : "-translate-x-full"}
  `}>
    <ul className="p-24 flex flex-col gap-3">
     <li className="text-xl font-bold text-[#127749]">
      <Link href="">Featured</Link>
     </li>

     <li className="text-xl font-bold hover:text-[#127749]">
      <Link href="">Rolex watches and accessories</Link>
     </li>

     <li className="text-xl font-bold hover:text-[#127749]">
      <Link href="">Watchmaking</Link>
     </li>

     <li className="text-xl font-bold hover:text-[#127749]">
      <Link href="">Oyster Story</Link>
     </li>

     <li className="text-xl font-bold hover:text-[#127749]">
      <Link href="">About Rolex</Link>
     </li>

     <li className="text-xl font-bold hover:text-[#127749]">
      <Link href="">Sports, Arts and Planet</Link>
     </li>

     <li className="text-xl font-bold hover:text-[#127749]">
      <Link href="">Buying and servicing</Link>
     </li>

     <li className="hover:text-[#127749] mt-8">
      <Link href="">Configure your Rolex</Link>
     </li>

     <li className="hover:text-[#127749]">
      <Link href="">Store locator</Link>
     </li>

     <li>
      <Link href="" className="flex items-center gap-2 mt-8 hover:text-[#127749]">
       <AiOutlineGlobal />
       <span>English</span>
      </Link>
     </li>

     <Link href="/" className="flex justify-center py-4">
      <img className="h-[46px]" src="/logo/Rolex_201x_logo.svg" alt="" />
     </Link>
    </ul>

    {/* Button close */}

    <button
     onClick={() => setIsOpenMenu(false)}
     className={`absolute top-8 left-full ml-4
                w-12 h-12 rounded-full
                flex items-center justify-center bg-white inset-shadow-2xs ${isOpenMenu ? "block" : "hidden"}`}>
     X
    </button>
   </div>
  </header>
 );
};

export default Header;
