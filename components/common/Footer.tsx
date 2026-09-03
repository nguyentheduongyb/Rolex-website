"use client";
import React from "react";
import Link from "next/link";
import { BsDiscord, BsGithub, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaExternalLinkAlt, FaFacebook, FaInstagram, FaLinkedin, FaPinterestP, FaWeibo, FaYoutube } from "react-icons/fa";
import { AiFillWechat, AiOutlineGlobal } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Footer = () => {
 return (
  <footer>
   <section className="w-full bg-white mt-5 text-[#127749]">
    <div className="flex justify-center py-4">
     <img className="h-[82px]" src="/logo/Rolex_201x_logo.svg" alt="" />
    </div>
    <div className="container md:flex justify-between py-6">
     <div className="flex gap-[20px] md:justify-left justify-center md:mb-0 mb-3 items-center">
      <span className="font-bold text-[#000000]">Share</span>
      <Link href="" target="_blank">
       <BsGithub className="w-[20px] h-[20px]" />
      </Link>
      <Link href="" target="_blank">
       <BsFacebook className="w-[20px] h-[20px]" />
      </Link>
      <Link href="">
       <BsInstagram className="w-[20px] h-[20px]" />
      </Link>
      <Link href="">
       <BsTwitter className="w-[20px] h-[20px]" />
      </Link>
     </div>
    </div>
   </section>
   <div className="text-[12px] md:text-[18px] mb-16">
    <ul className="container md:w-3/4 mx-auto columns-2 md:columns-3 gap-3 md:gap-20">
     <li className="">
      <ul className="mb-4 flex flex-col h-full">
       <Link className="text-base lg:text-2xl font-bold" href="">
        Rolex watches and accessories
       </Link>
       <li>
        <Link href="">Air-King</Link>
       </li>
       <li>
        <Link href="">Cosmograph Daytona</Link>
       </li>
       <li>
        <Link href="">Datejust</Link>
       </li>
       <li>
        <Link href="">Lady-Datejust</Link>
       </li>
       <li>
        <Link href="">Day-Date</Link>
       </li>
       <li>
        <Link href="">Explorer</Link>
       </li>
       <li>
        <Link href="">Explorer II</Link>
       </li>
       <li>
        <Link href="">GMT-Master II</Link>
       </li>
       <li>
        <Link href="">Land-Dweller</Link>
       </li>
       <li>
        <Link href="">Oyster Perpetual</Link>
       </li>
       <li>
        <Link href="">Sea-Dweller</Link>
       </li>
       <li>
        <Link href="">Deepsea</Link>
       </li>
       <li>
        <Link href="">Sky-Dweller</Link>
       </li>
       <li>
        <Link href="">Submariner</Link>
       </li>
       <li>
        <Link href="">Yacht-Master</Link>
       </li>
       <li>
        <Link href="">Yacht-Master II</Link>
       </li>
       <li>
        <Link href="">1908</Link>
       </li>

       <li className="mt-4">
        <Link href="">New watches 2026</Link>
       </li>
       <li>
        <Link href="">Find your Rolex</Link>
       </li>
       <li>
        <Link href="">Configure your Rolex</Link>
       </li>
       <li>
        <Link href="">Men&apos;s watches</Link>
       </li>
       <li>
        <Link href="">Women&apos;s watches</Link>
       </li>
       <li>
        <Link href="">Gold watches</Link>
       </li>

       <li className="mt-auto">
        <Link href="">Accessories</Link>
       </li>
      </ul>
     </li>
     <li className="">
      <ul className="flex flex-col justify-between h-full">
       <li>
        <Link className="text-base md:text-2xl font-bold" href="">
         Watchmaking
        </Link>
        <ul>
         <li>
          <Link href="">Rolex anatomy</Link>
         </li>
        </ul>
       </li>
       <li>
        <Link className="text-base md:text-2xl font-bold" href="">
         Oyster Story
        </Link>
        <ul>
         <li>
          <Link href="">The film</Link>
         </li>
        </ul>
       </li>
       <li>
        <Link className="text-base md:text-2xl font-bold" href="">
         About Rolex
        </Link>
        <ul>
         <li>
          <Link href="">Sustainability</Link>
         </li>
         <li>
          <Link href="">Behind the crown</Link>
         </li>
         <li className="">
          <Link href="">History</Link>
         </li>
        </ul>
       </li>
       <li>
        <Link className="text-base md:text-2xl font-bold" href="">
         Sports, Arts and Planet
        </Link>
        <ul>
         <li>
          <Link href="">Rolex and sports</Link>
         </li>
         <li>
          <Link href="">Perpetual Planet</Link>
         </li>
         <li>
          <Link href="">Perpetual Arts</Link>
         </li>
        </ul>
       </li>
       <li>
        <Link href="">The Rolex family</Link>
       </li>
       <li>
        <Link className="text-base md:text-2xl font-bold" href="">
         Buying and servicing
        </Link>
        <ul>
         <li>
          <Link href="">Buying a Rolex</Link>
         </li>
         <li>
          <Link href="">Rolex Certified Pre-Owned</Link>
         </li>
         <li>
          <Link href="">Servicing your Rolex</Link>
         </li>
         <li>
          <Link href="">Caring for your Rolex</Link>
         </li>
        </ul>
       </li>
       Oyster Story
       <li>
        <Link href="">Store locator</Link>
       </li>
       <li>
        <Link href="">Service Centre locator</Link>
       </li>
      </ul>
     </li>
     <li className="">
      <ul className="h-full flex flex-col justify-between">
       <li>
        <Link className="font-bold" href="">
         Help and support
        </Link>
        <ul>
         <li>
          <Link href="">Frequently asked questions</Link>
         </li>
         <li>
          <Link href="">File a report</Link>
         </li>
        </ul>
       </li>

       <li>
        <Link className="font-bold" href="">
         Accessibility
        </Link>
        <ul>
         <li>
          <Link href="">Read our statement</Link>
         </li>
        </ul>
       </li>

       <li>
        <Link className="font-bold" href="">
         Media
        </Link>
        <ul>
         <li>
          <Link href="">Wallpapers</Link>
         </li>
         <li>
          <Link href="">Brochures</Link>
         </li>
         <li>
          <Link href="">User guides</Link>
         </li>
        </ul>
       </li>

       <li>
        <Link className="font-bold" href="">
         Official channels
        </Link>
        <ul>
         <li className="flex items-center gap-2">
          <FaYoutube />
          <Link href="">YouTube</Link>
         </li>
         <li className="flex items-center gap-2">
          <FaInstagram />
          <Link href="">Instagram</Link>
         </li>
         <li className="flex items-center gap-2">
          <FaFacebook />
          <Link href="">Facebook</Link>
         </li>
         <li className="flex items-center gap-2">
          <FaLinkedin />
          <Link href="">LinkedIn</Link>
         </li>
         <li className="flex items-center gap-2">
          <FaPinterestP />
          <Link href="">Pinterest</Link>
         </li>
         <li className="flex items-center gap-2">
          <FaWeibo />
          <Link href="">Weibo</Link>
         </li>
         <li className="flex items-center gap-2">
          <AiFillWechat />
          <Link href="">WeChat</Link>
         </li>

         <li className="flex items-center gap-2">
          <IoChatbubbleEllipsesOutline />
          <Link href="">Line</Link>
         </li>
        </ul>
       </li>

       <li>
        <Link className="font-bold" href="">
         Our platforms
        </Link>
        <ul>
         <li className="flex items-center gap-2">
          <Link href="">Newsroom</Link>

          <FaExternalLinkAlt />
         </li>
         <li className="flex items-center gap-2">
          <Link href="">Rolex.org</Link>

          <FaExternalLinkAlt />
         </li>
        </ul>
       </li>
      </ul>
     </li>
    </ul>
   </div>
   <div className="container mx-auto border-t mt-16 pt-6">
    <div className="flex flex-col gap-4 justify-between">
     <div className="flex items-center gap-2">
      <AiOutlineGlobal />
      <span>International: English</span>
     </div>
    </div>
    <div className="mt-8 flex gap-2 items-center justify-center">
     <Link className="hover:text-[#127749]" href="">
      Terms of use
     </Link>
     <span>-</span>
     <Link className="hover:text-[#127749]" href="">
      Privacy notice
     </Link>
     <span>-</span>
     <Link className="hover:text-[#127749]" href="">
      Cookies
     </Link>
    </div>
   </div>
   <div className="relative mt-8">
    <div className="w-full aspect-[400/500] md:aspect-[1920/450] bg-center bg-no-repeat bg-[url('/image/Footer/rolex-com-footer-rolex-org-push-cc69-1587746.avif')]"></div>
    <span className="text-2xl text-wrap md:text-5xl font-bold text-center absolute inset-0 flex items-center justify-center text-white">
     Discover our Perpetual
     <br className="md:hidden" />
     Initiatives
    </span>
   </div>
  </footer>
 );
};

export default Footer;
