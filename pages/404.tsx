import { FaArrowRight } from "react-icons/fa";

export default function Custom404() {
 return (
  <main className="bg-white text-[#111]">
   {/* TITLE */}
   <section className="pt-32 pb-16 md:pt-40 md:pb-24">
    <div className="container">
     <h1 className="text-4xl font-bold md:text-6xl">This page is not available</h1>
    </div>
   </section>

   {/* MAIN IMAGE */}
   <section>
    <figure className="h-[420px] w-full overflow-hidden md:h-[650px]">
     <img src="https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/rolexcom/404" alt="Rolex" className="h-full w-full object-cover" />
    </figure>
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
        src="https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_640/v1/rolexcom/404/find-rolex"
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
        src="https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_640/v1/rolexcom/404/find-retailer"
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
