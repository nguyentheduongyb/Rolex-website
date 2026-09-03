import { useRouter } from "next/router";
import { useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";

import PoliciesPopper from "~/components/popper/information/Policies";
import { BsDownload } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
export default function Model() {
 const router = useRouter();
 const { collection, model } = router.query;
 const [isOpenPoliciesPopper, setIsOpenPoliciesPopper] = useState(false);
 const [openIndexes, setOpenIndexes] = useState<number[]>([]);

 const handleToggle = (index: number) => {
  setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]));
 };
 return (
  <div>
   {isOpenPoliciesPopper ? <PoliciesPopper isOpenPoliciesPopper={isOpenPoliciesPopper} onClose={() => setIsOpenPoliciesPopper(false)} /> : ""}

   <section className="bg-[#D8D8D8]">
    <div className="container relative mx-auto h-[600px] md:h-[570px]">
     {/* ADD TO FAVOURITES */}
     <button className="absolute left-0 top-6 z-10 flex cursor-pointer items-center gap-1 text-[8px] font-bold text-primary hover:text-black md:top-[190px] md:gap-2 md:text-base">
      <FaHeart />
      <span>Add to favourites</span>
     </button>

     {/* MAIN WATCH */}
     <figure className="absolute inset-0 aspect-[400/320] md:aspect-[837/314]">
      <img
       className="h-full w-full object-contain"
       src="https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-glimmer-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/reflection/glimmer-36"
       alt="Datejust 36"
      />
     </figure>
     <figure className="absolute left-1/2 flex h-[320px] w-[320px] -translate-x-1/2 items-center justify-center md:h-[500px] md:w-[460px]">
      <img className="h-full w-full object-contain" src="/image/watches/details/m126234-0051.avif" alt="Datejust 36" />
     </figure>

     {/* PRODUCT INFORMATION */}
     <div className="absolute bottom-[70px] left-0 w-[70%] md:bottom-auto md:top-[245px] md:w-[40%]">
      <h1 className="flex flex-col gap-2">
       <span className="text-xl font-bold md:text-4xl">Datejust 36</span>
       <span className="flex items-center text-[#525354] md:text-xl">Oyster, 36 mm, Oystersteel and white gold</span>

       <span className="text-[#525354] md:text-xl">Reference 126234</span>
       <div className="flex gap-1 items-center">
        <span className="text-[#525354] md:text-xl">288.800.000 VND</span>
        <button onClick={() => setIsOpenPoliciesPopper(true)}>
         <HiOutlineInformationCircle color="#525354" size={24} />
        </button>
       </div>

       {/* ADD TO CART */}
       <button className="mt-4 rounded-full bg-[var(--primary-color)] py-2 font-bold text-white hover:opacity-90 md:mt-5 md:w-[240px] ">Add to cart</button>
      </h1>
     </div>

     {/* VIEW VARIATIONS */}
     <div className="absolute right-6 top-[235px] flex flex-col items-center md:top-[190px] md:w-[25%]">
      <div className="flex h-[95px] w-[90px] items-center justify-center md:h-[220px] md:w-full">
       <img
        className="h-full w-full object-contain"
        src="https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126234-0045!/t_v7-model-variation/c_limit,w_640/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126234-0015"
        alt="View variations"
       />
      </div>

      <button className="mt-1 cursor-pointer text-[7px] font-bold hover:text-primary md:mt-2 md:text-base">View variations</button>
     </div>

     {/* RIGHT SLIDER */}
     <div className="absolute right-0 top-[180px] -translate-x-1/2 flex flex-col gap-3 my- md:gap-4">
      <span className="h-8 w-[2px] rounded bg-[#222] md:h-16 md:w-1"></span>
      <span className="h-5 w-[2px] rounded bg-[#222] md:h-7 md:w-1"></span>
      <span className="h-5 w-[2px] rounded bg-[#222] md:h-7 md:w-1"></span>
      <span className="h-5 w-[2px] rounded bg-[#222] md:h-7 md:w-1"></span>
     </div>

     {/* NIGHT MODE / 360 */}
     <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 md:bottom-6 md:gap-5">
      <button className="flex cursor-pointer items-center justify-center font-bold hover:text-primary">
       <span className="text-base md:text-2xl">☾</span>
       <span className="ml-2 hidden md:block">View in night mode</span>
      </button>

      <span className="h-5 w-px bg-[#525354] md:h-12"></span>

      <button className="flex cursor-pointer items-center justify-center font-bold hover:text-primary">
       <span className="text-[8px] md:text-xl">360°</span>
       <span className="ml-2 hidden md:block">Discover in 360°</span>
      </button>
     </div>
    </div>
   </section>

   {/* Section Make a day */}
   <section className="relative w-full bg-cover bg-center bg-no-repeat aspect-[400/600] lg:aspect-[1920/800] bg-[url('https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-datejust')]">
    <div className="absoulute inset-0 w-full h-full bg-[rgba(66,105,75,0.6)]"></div>
    <div className="absolute inset-0 flex gap-4 items-center justify-center">
     <div className="container md:w-1/2">
      <p className="uppercase text-2xl text-[rgb(164,204,174)]">Make a date of a day</p>
      <h2 className="text-4xl text-white md:text-6xl font-bold">
       This Oyster Perpetual Datejust 36 in Oystersteel and white gold features a mint green dial and a Jubilee bracelet.
      </h2>
     </div>
    </div>
   </section>
   {/* Section A Rolex signature */}
   <section className="">
    <div className="container py-12 md:w-3/4 mx-auto grid md:grid-cols-2 items-center justify-center gap-8">
     <figure className="aspect-[400/400]  bg-no-repeat bg-contain bg-[url('http://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126234-0051')]"></figure>
     <div className="flex gap-4 flex-col">
      <p className="uppercase text-2xl ">Fluted bezel</p>
      <h2 className="text-4xl md:text-6xl text-[rgb(66,105,75)] font-bold">A Rolex signature</h2>
      <p className="text-xl md:text-2xl font-light">
       The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto
       the case helping to ensure the waterproofness of the watch.
      </p>
      <p className="text-xl md:text-2xl font-light">
       It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over
       time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, in gold on this
       Datejust 36.
      </p>
     </div>
    </div>
   </section>
   {/* Section Mint green dial */}
   <section className="">
    <div className="container py-12 md:w-3/4 mx-auto grid md:grid-cols-2 items-center justify-center gap-8">
     <figure className="aspect-[400/400]  bg-no-repeat bg-contain bg-[url('https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_3840/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126234-0051')]"></figure>
     <div className="flex gap-4 flex-col">
      <p className="uppercase text-2xl ">Mint green dial</p>
      <h2 className="text-4xl md:text-6xl text-[rgb(66,105,75)] font-bold">A watchmaking technique</h2>
      <p className="text-xl md:text-2xl font-light">
       The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques
       that create grooves running outwards from the centre of the dial.
      </p>
      <p className="text-xl md:text-2xl font-light">
       Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist. Once the
       sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial
       its final look.
      </p>
     </div>
    </div>
   </section>

   {/* Section White Rolesor */}
   <section className="bg-[#E3E5E9]">
    <div className="container py-12 md:w-3/4 mx-auto grid md:grid-cols-2 items-center justify-center gap-8">
     <div className="flex flex-col gap-32">
      <div className="flex gap-4 flex-col">
       <p className="uppercase text-2xl ">White Rolesor</p>
       <h2 className="text-4xl md:text-6xl text-[rgb(66,105,75)] font-bold">A meeting of two metals</h2>
       <p className="text-xl md:text-2xl font-light">
        Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their
        properties.
       </p>
       <p className="text-xl md:text-2xl font-light">
        A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent
        pillars of the Oyster Perpetual collection.
       </p>
      </div>
      <div className="flex gap-4 flex-col">
       <p className="uppercase text-2xl ">The Jubilee bracelet</p>
       <h2 className="text-4xl md:text-6xl text-[rgb(66,105,75)] font-bold">Supple and comfortable</h2>
       <p className="text-xl md:text-2xl font-light">
        The design, development and production of Rolex bracelets and clasps, as well as the stringent tests they face, involve advanced high technology.
       </p>
       <p className="text-xl md:text-2xl font-light">
        And, as with all the components of the watch, aesthetic controls by the human eye guarantee impeccable beauty. The Jubilee, a supple and comfortable
        five-piece link metal bracelet, was designed and made especially for the launch of the Oyster Perpetual Datejust in 1945.
       </p>
      </div>
     </div>

     <figure className="aspect-[400/400]  bg-no-repeat bg-center bg-[url('https://w.ladicdn.com/60a1f7e18b7784001369fedb/anim-bracelet-material-portrait-126710blnr-79200-0000-20250423065431-vdkje.avif')]"></figure>
    </div>
   </section>

   {/* Section More */}
   <section className="py-12 container md:w-3/4 mx-auto">
    <div className="relative">
     <div className="absolute inset-0">
      <h2 className="text-2xl md:text-5xl font-bold md:leading-[55px]">
       More Datejust <br />
       <span className="text-[var(--primary-color)]">technical detail</span>
      </h2>
      <div className="md:mt-6 text-xl flex gap-2">
       <span className="font-bold">Reference</span>
       <span>126234</span>
      </div>
     </div>
     <div className="relative">
      <figure className="">
       <img
        className="mx-auto w-[420px]"
        src="https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-majesty/c_limit,w_640/v1/a677b2c664f6/catalogue/2026/upright-c/m126234-0051"
        alt=""
       />
      </figure>
      <figure className="w-full absolute inset-0">
       <img
        className="mx-auto w-[420px]"
        src="https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-majesty-shadow/c_limit,w_240/v1/a677b2c664f6/catalogue/2026/upright-c-shadow/m126234-0051"
        alt=""
       />
      </figure>
     </div>
    </div>
   </section>
   {/* Section Information */}
   <section className="py-12 container md:w-3/4 mx-auto">
    <ul className="border-t">
     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Model case</h4>
       <button onClick={() => handleToggle(0)} className="cursor-pointer">
        {openIndexes.includes(0) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(0) && (
       <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-16">
        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Model case</h5>
          <p>Oyster, 36 mm, Oystersteel and white gold</p>
         </div>
         <div>
          <h5 className="font-bold">Oyster architecture</h5>
          <p>Oystersteel and white gold</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Diameter</h5>
          <p>36 mm</p>
         </div>
         <div>
          <h5 className="font-bold">Material</h5>
          <p>White Rolesor - combination of Oystersteel and white gold</p>
         </div>
         <div>
          <h5 className="font-bold">Bezel</h5>
          <p>Fluted</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Winding crown</h5>
          <p>Screw-down, Twinlock double waterproofness system</p>
         </div>
         <div>
          <h5 className="font-bold">Crystal</h5>
          <p>Scratch-resistant sapphire, Cyclops lens over the date</p>
         </div>
         <div>
          <h5 className="font-bold">Water resistance</h5>
          <p>Waterproof to 100 metres / 330 feet</p>
         </div>
        </div>
       </div>
      )}
     </li>

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Movement</h4>
       <button onClick={() => handleToggle(1)} className="cursor-pointer">
        {openIndexes.includes(1) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(1) && (
       <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-16">
        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Movement</h5>
          <p>Perpetual, mechanical, self-winding</p>
         </div>
         <div>
          <h5 className="font-bold">Calibre</h5>
          <p>3235, Manufacture Rolex</p>
         </div>
         <div>
          <h5 className="font-bold">Precision</h5>
          <p>-2/+2 sec/day, after casing</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Functions</h5>
          <p>Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting</p>
         </div>
         <div>
          <h5 className="font-bold">Oscillator</h5>
          <p>Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Winding</h5>
          <p>Bidirectional self-winding via Perpetual roto</p>
         </div>
         <div>
          <h5 className="font-bold">Power reserve</h5>
          <p>Approximately 70 hours</p>
         </div>
        </div>
       </div>
      )}
     </li>

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Bracelet</h4>
       <button onClick={() => handleToggle(2)} className="cursor-pointer">
        {openIndexes.includes(2) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(2) && (
       <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-16">
        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Bracelet</h5>
          <p>Jubilee, five-piece links</p>
         </div>
         <div>
          <h5 className="font-bold">Material</h5>
          <p>Oystersteel</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Functions</h5>
          <p>Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting</p>
         </div>
        </div>
       </div>
      )}
     </li>

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Dial</h4>
       <button onClick={() => handleToggle(3)} className="cursor-pointer">
        {openIndexes.includes(3) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(3) && (
       <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-16">
        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Dial</h5>
          <p>Mint green</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Details</h5>
          <p>Highly legible Chromalight display with long-lasting blue luminescence</p>
         </div>
        </div>
       </div>
      )}
     </li>

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Certification</h4>
       <button onClick={() => handleToggle(4)} className="cursor-pointer">
        {openIndexes.includes(4) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(4) && (
       <div className="mt-16 grid gap-4 md:gap-16">
        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">Certification</h5>
          <p>Superlative Chronometer (official chronometer certification + Rolex certification after casing)</p>
         </div>
        </div>
       </div>
      )}
     </li>

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">User guide</h4>
       <button onClick={() => handleToggle(5)} className="cursor-pointer">
        {openIndexes.includes(5) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(5) && (
       <div className="mt-16 grid gap-4 md:gap-16">
        <div className="flex flex-col gap-4 text-xl md:text-2xl">
         <div>
          <h5 className="font-bold">User guide</h5>
          <p>Learn how to set the time and other functions of your Rolex watch by consulting our user guides.</p>
         </div>
        </div>

        <div className="ml-6 flex items-center gap-2 text-xl font-bold text-[var(--primary-color)] md:text-xl">
         <BsDownload />
         Download Brochure
        </div>
       </div>
      )}
     </li>
    </ul>
   </section>

   {/* Brochure */}
   <section className="py-10">
    <div className="mx-auto flex flex-col items-center gap-10 mb-12">
     <h2 className="uppercase text-xl md:text-2xl">Datejust 36</h2>
     <h3 className="text-6xl md:text-8xl font-black">Brochure</h3>
     <div className="text-[var(--primary-color)] text-xl md:text-2xl font-bold flex justify-center items-center gap-2">
      <BsDownload />
      Download Brochure
     </div>
    </div>
    <div className="container md:w-2/3 grid grid-rows md:grid-cols-2 gap-20 mx-auto items-center">
     <img
      className="w-full h-full"
      src="https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126234-0051"
      alt=""
     />
     <div className="flex flex-col md:flex-rows gap-4">
      <h2 className="text-4xl md:text-6xl font-bold">Contact an Official Rolex Retailer</h2>
      <p className="text-lg md:text-2xl font-light">
       Only official Rolex retailers are allowed to sell and maintain a Rolex watch. With the necessary skills, technical know-how and special equipment, they
       guarantee the authenticity of each and every part of your Rolex and help you make the choice that will last a lifetime.
      </p>
      <Link className="mt-2 text-xl text-[var(--primary-color)] hover:text-black font-bold" href="">
       Contact a retailer &gt;
      </Link>
     </div>
    </div>
   </section>

   {/* Discover */}
   <section className="relative px-4 aspect-[400/900] md:aspect-[1526/275] bg-no-repeat bg-center bg-[url('https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1//rolexcom/model-page/editorial-push/fixed/model-page-editorial-push-fixed-watchmaking-cyclops-lens-2023_watchmaking_features_cyclop_lens_still_ooh_master_rvb')]">
    <div className="container absolute inset-0 h-full flex flex-col justify-center gap-2">
     <h2 className="font-bold text-6xl">At a single glance</h2>
     <p className="text-4xl font-light">Cyclops lens</p>
     <Link className="mt-2 text-xl font-bold" href="">
      Discover this feature &gt;
     </Link>
    </div>
   </section>

   {/* Section Watches you may like */}
   <section className="bg-white py-16">
    <div className="container">
     <div className="lg:w-1/3 mb-10">
      <h2 className="mb-4 text-2xl font-bold">Watches you may like</h2>

      <p>These watches have been selected for you. Add them with the heart icon to your favorites.</p>
     </div>

     <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {/* Card */}
      <div className="relative pb-20 md:pb-0 min-h-[280px] bg-[#f4f4f4] md:grid md:h-[280px] md:grid-cols-[55%_45%]">
       {/* Heart */}
       <button className="absolute left-3 top-3 z-10 md:left-8 md:top-8">
        <FaHeart className="text-[10px] text-primary md:text-xl" />
       </button>

       {/* TEXT */}
       <div className="absolute bottom-3 md:ml-8 left-3 right-3 z-10 md:static md:flex md:items-center">
        <div>
         <h3 className="mb-1 text-[16px] font-bold md:mb-2 md:text-2xl">Datejust 36</h3>

         <p className="text-[12px] leading-relaxed md:max-w-[260px] md:text-lg">
          Oyster, 36 mm,
          <br />
          Oystersteel and white gold
         </p>
        </div>
       </div>

       {/* IMAGE */}
       <div className="h-[280px] w-full bg-[url('/image/watches/details/m126234-0059.avif')] bg-contain bg-center bg-no-repeat md:col-start-2 md:h-full" />

       {/* NEW MODEL */}
       <span className="absolute hidden md:bottom-8 md:left-8 md:block md:text-lg md:font-bold">New model</span>
      </div>
      {/* Card */}
      <div className="relative pb-20 md:pb-0 min-h-[280px] bg-[#f4f4f4] md:grid md:h-[280px] md:grid-cols-[55%_45%]">
       {/* Heart */}
       <button className="absolute left-3 top-3 z-10 md:left-8 md:top-8">
        <FaHeart className="text-[10px] text-primary md:text-xl" />
       </button>

       {/* TEXT */}
       <div className="absolute bottom-3 md:ml-8 left-3 right-3 z-10 md:static md:flex md:items-center">
        <div>
         <h3 className="mb-1 text-[16px] font-bold md:mb-2 md:text-2xl">Datejust 36</h3>

         <p className="text-[12px] leading-relaxed md:max-w-[260px] md:text-lg">
          Oyster, 36 mm,
          <br />
          Oystersteel and white gold
         </p>
        </div>
       </div>

       {/* IMAGE */}
       <div className="h-[280px] w-full bg-[url('/image/watches/details/m126234-0059.avif')] bg-contain bg-center bg-no-repeat md:col-start-2 md:h-full" />

       {/* NEW MODEL */}
       <span className="absolute hidden md:bottom-8 md:left-8 md:block md:text-lg md:font-bold">New model</span>
      </div>
      {/* Card */}
      <div className="relative pb-20 md:pb-0 min-h-[280px] bg-[#f4f4f4] md:grid md:h-[280px] md:grid-cols-[55%_45%]">
       {/* Heart */}
       <button className="absolute left-3 top-3 z-10 md:left-8 md:top-8">
        <FaHeart className="text-[10px] text-primary md:text-xl" />
       </button>

       {/* TEXT */}
       <div className="absolute bottom-3 md:ml-8 left-3 right-3 z-10 md:static md:flex md:items-center">
        <div>
         <h3 className="mb-1 text-[16px] font-bold md:mb-2 md:text-2xl">Datejust 36</h3>

         <p className="text-[12px] leading-relaxed md:max-w-[260px] md:text-lg">
          Oyster, 36 mm,
          <br />
          Oystersteel and white gold
         </p>
        </div>
       </div>

       {/* IMAGE */}
       <div className="h-[280px] w-full bg-[url('/image/watches/details/m126234-0059.avif')] bg-contain bg-center bg-no-repeat md:col-start-2 md:h-full" />

       {/* NEW MODEL */}
       <span className="absolute hidden md:bottom-8 md:left-8 md:block md:text-lg md:font-bold">New model</span>
      </div>
     </div>
    </div>
   </section>

   {/* Section About Collection */}
   <section className="p-8 text-center">
    <Link href="/watches" className="text-primary font-bold flex flex-col gap-8">
     <p>NEXT</p>
     <span className="text-3xl md:text-6xl font-bold">
      Introduction to <br /> the Datejust
     </span>
     <button className="block mx-auto md:text-xl rounded-full bg-[var(--primary-color)] px-6 py-2 text-white">Continue</button>
    </Link>
   </section>
  </div>
 );
}
Model.Layout = "Default";
