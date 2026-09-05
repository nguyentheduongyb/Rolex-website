"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import { rolexWatches, RolexWatch } from "~/data/rolexWatches";

interface WatchesYouMayLikeProps {
 watch: RolexWatch;
}

export default function WatchesYouMayLike({ watch }: WatchesYouMayLikeProps) {
 const [visibleCount, setVisibleCount] = useState(3);

 const recommendedWatches = rolexWatches.filter((item) => item.id !== watch.id);

 const visibleWatches = recommendedWatches.slice(0, visibleCount);

 const handleViewMore = () => {
  if (visibleCount >= 12) {
   setVisibleCount(recommendedWatches.length);
   return;
  }

  setVisibleCount((prev) => prev + 3);
 };

 return (
  <section className="bg-white py-16">
   <div className="container">
    <div className="mb-10 lg:w-1/3">
     <h2 className="mb-4 text-2xl font-bold">Watches you may like</h2>

     <p>These watches have been selected for you. Add them with the heart icon to your favorites.</p>
    </div>

    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
     {visibleWatches.map((item) => (
      <Link
       href={`/watches/${item.slug}/${item.id.toLowerCase()}`}
       key={item.id}
       className="relative min-h-[280px] bg-[#f4f4f4] pb-20 md:grid md:h-[280px] md:grid-cols-[55%_45%] md:pb-0">
       <button onClick={(e) => e.preventDefault()} className="absolute left-3 top-3 z-10 md:left-8 md:top-8">
        <FaHeart className="text-[10px] text-primary md:text-xl" />
       </button>

       <div className="absolute bottom-3 left-3 right-3 z-10 md:static md:ml-8 md:flex md:items-center">
        <div>
         <h3 className="mb-1 text-[16px] font-bold md:mb-2 md:text-2xl">{item.name}</h3>

         <p className="text-[12px] leading-relaxed md:max-w-[260px] md:text-lg">{item.title}</p>
        </div>
       </div>

       <div
        className="h-[280px] w-full bg-contain bg-center bg-no-repeat md:col-start-2 md:h-full"
        style={{
         backgroundImage: `url(${item.images.main})`,
        }}
       />

       <span className="absolute hidden md:bottom-8 md:left-8 md:block md:text-lg md:font-bold">New model</span>
      </Link>
     ))}
    </div>

    {/* BUTTON */}
    {visibleCount < recommendedWatches.length && (
     <div className="mt-10 flex justify-center">
      <button onClick={handleViewMore} className="rounded-full bg-[var(--primary-color)] px-8 py-3 font-bold text-white hover:opacity-90">
       {visibleCount >= 12 ? "View all" : "View more"}
      </button>
     </div>
    )}
   </div>
  </section>
 );
}
