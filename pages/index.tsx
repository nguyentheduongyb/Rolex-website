"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";

import { LiaPercentSolid } from "react-icons/lia";
import { HiFire } from "react-icons/hi";

import data from "~/backendURL/data";
import { array } from "prop-types";
import { BsDiscord, BsGithub, BsFacebook, BsInstagram, BsTwitter, BsBookmarkHeartFill, BsCoin, BsFillHeartFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { LiaUserSolid } from "react-icons/lia";
import { FaHeadphones } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { PiGameController } from "react-icons/pi";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
const HomePage = () => {
 return (
  <div className="">
   <section className="relative">
    <video
     className="w-full"
     autoPlay
     muted
     loop
     playsInline
     src="https://media.rolex.com/video/upload/c_limit,w_960/f_auto:video/q_auto:best/v1/rolexcom/rolex-testimonees/sports/motor-sports/mark-webber/videos/content-film/autoplay/rolex-testimonees-motor-sport-mark-webber-content-film-autoplay-8-rolex.com-clean-pn-ln"></video>
   </section>

   <section className="pl-2 w-full md:w-3/4 md:mx-auto flex lg:grid lg:grid-cols-3 gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide">
    <Link href="" className="w-3/4 min-w-[200px] shrink-0 lg:w-auto lg:min-w-0">
     <img className="w-full" src="/image/homepage/homepage-roller-media-card-oyster-perpetual-submariner.avif" alt="" />
    </Link>

    <Link href="" className="w-3/4 min-w-[200px] shrink-0 lg:w-auto lg:min-w-0">
     <img
      className="w-full"
      src="/image/homepage/homepage-roller-media-card-watchmaking-unidirectional-rotatable-bezel-still_ooh_330pc_02-lowres.avif"
      alt=""
     />
    </Link>

    <Link href="" className="w-3/4 min-w-[200px] shrink-0 lg:w-auto lg:min-w-0">
     <img className="w-full" src="/image/homepage/homepage-roller-media-tour-highlights-card-atpf_2411tl_0457_r.avif" alt="" />
    </Link>
   </section>
   <section
    className="relative w-full bg-cover
    bg-center
    bg-no-repeat aspect-[1200/1692] lg:aspect-[1920/800] bg-[url('/image/homepage/mobile/homepage-welcome-back-push-portrait.avif')] lg:bg-[url('/image/homepage/homepage-welcome-back-push.avif')]">
    <div className="w-full absolute text-center top-20">
     <p className="uppercase">Resume your visit</p>
     <h2 className="text-6xl font-bold">Welcome back</h2>
    </div>
   </section>
  </div>
 );
};
export default HomePage;
HomePage.Layout = "Default";
// HomePage.Layout = "OtherLayout"; -> error Type '"OtherLayout"' is not assignable to type '"Main" | "Admin" | undefined'.
