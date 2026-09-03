import { FaArrowRight } from "react-icons/fa";

export default function Custom404() {
 return (
  <main className="bg-white text-[#111]">
   {/* TITLE */}

   {/* MAIN IMAGE */}
   <section className="relative">
    <figure className="h-[420px] w-full overflow-hidden md:h-[650px]">
     <picture>
      {/* Ảnh Mobile */}
      <source
       media="(max-width: 767px)"
       srcSet="https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1600/v1708384191/rolexcom/404/rolex-404-day-date-m228236-0012-2207jva-001-portrait"
      />

      {/* Ảnh Desktop */}
      <img
       src="https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1708385846/rolexcom/404/rolex-404-day-date-m228236-0012-2207jva-001"
       alt="This page is not available"
       className="h-full w-full object-cover"
      />
     </picture>
    </figure>

    <div className="absolute inset-0 flex items-center justify-center">
     <h1 className="w-1/2 text-center text-4xl font-bold text-white md:text-6xl">This page is not available</h1>
    </div>
   </section>

   {/* EXPLORE ROLEX COLLECTION */}
   <section className="bg-[#f3f3f3] py-16 md:py-24">
    <div className="container">
     <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center md:gap-20">
      {/* TEXT */}
      <div>
       <h2 className="text-3xl font-bold md:text-5xl">Explore the Rolex collection</h2>

       <p className="mt-6 max-w-[650px] text-lg leading-relaxed text-[#525354] md:text-xl">
        The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist.
       </p>

       <button className="mt-8 flex cursor-pointer items-center gap-3 font-bold hover:text-[#127749]">
        Find your Rolex
        <FaArrowRight />
       </button>
      </div>

      {/* IMAGE */}
      <figure className="overflow-hidden">
       <img
        src="https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1708403761/rolexcom/404/rolex-404-find-your-rolex-m124300-0001-2010jva-001"
        alt="Find your Rolex"
        className="w-full object-cover transition duration-700 hover:scale-105"
       />
      </figure>
     </div>
    </div>
   </section>

   {/* OFFICIAL ROLEX RETAILER */}
   <section className="bg-white py-16 md:py-24">
    <div className="container">
     <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center md:gap-20">
      {/* IMAGE */}
      <figure className="order-2 overflow-hidden md:order-1">
       <img
        src="https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1708385846/rolexcom/404/rolex-404-day-date-m228236-0012-2207jva-001"
        alt="Official Rolex Retailer"
        className="w-full object-cover transition duration-700 hover:scale-105"
       />
      </figure>

      {/* TEXT */}
      <div className="order-1 md:order-2">
       <h2 className="text-3xl font-bold md:text-5xl">Official Rolex Retailer</h2>

       <p className="mt-6 max-w-[650px] text-lg leading-relaxed text-[#525354] md:text-xl">
        Only official Rolex retailers are allowed to sell and maintain a Rolex. With the necessary skills, technical know-how and special equipment, they
        guarantee the authenticity of each and every part of your Rolex and help you make the choice that will last a lifetime.
       </p>

       <button className="mt-8 flex cursor-pointer items-center gap-3 font-bold hover:text-[#127749]">
        Find a retailer
        <FaArrowRight />
       </button>
      </div>
     </div>
    </div>
   </section>
  </main>
 );
}

Custom404.Layout = "Default";
