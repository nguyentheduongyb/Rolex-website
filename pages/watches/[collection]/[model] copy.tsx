"use client";

import { useEffect, useRef, useState } from "react";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

const ROLEX_MEDIA = "https://media.rolex.com/image/upload/q_auto/f_auto";

export default function Datejust() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);
 const [introVisible, setIntroVisible] = useState(false);
 const [featureVisible, setFeatureVisible] = useState(false);

 const introRef = useRef<HTMLDivElement>(null);
 const featureRef = useRef<HTMLDivElement>(null);

 const handleToggle = (index: number) => {
  setOpenIndex((current) => (current === index ? null : index));
 };

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    setIntroVisible(entry.isIntersecting);
   },
   {
    rootMargin: "-45% 0px -35% 0px",
    threshold: 0,
   },
  );

  if (introRef.current) {
   observer.observe(introRef.current);
  }

  return () => observer.disconnect();
 }, []);

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    setFeatureVisible(entry.isIntersecting);
   },
   {
    rootMargin: "-45% 0px -35% 0px",
    threshold: 0,
   },
  );

  if (featureRef.current) {
   observer.observe(featureRef.current);
  }

  return () => observer.disconnect();
 }, []);

 return (
  <main className="bg-white">
   {/* ========================================================= */}
   {/* HERO */}
   {/* ========================================================= */}

   <section className="relative h-[650px] overflow-hidden bg-[#d8d8d8] md:h-[700px]">
    <picture className="absolute inset-0 h-full w-full">
     <source media="(max-width: 767px)" srcSet={`${ROLEX_MEDIA}/c_limit,w_640/v1/a677b2c664f6/catalogue/2026/upright-c/m278274-0018`} />

     <img
      src={`${ROLEX_MEDIA}/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m278274-0018`}
      alt="Rolex Datejust 31"
      className="h-full w-full object-contain"
     />
    </picture>

    <div className="container relative h-full">
     {/* LEFT INFORMATION */}

     <div className="absolute bottom-8 left-5 z-10 md:left-10 md:top-1/2 md:w-[42%] md:-translate-y-1/2">
      <button className="mb-5 flex cursor-pointer items-center gap-2 text-[#127749] transition hover:text-black md:mb-8">
       <FaHeart />

       <span className="font-bold">Add to favourites</span>
      </button>

      <h1 className="flex flex-col">
       <span className="text-3xl font-bold md:text-5xl">Datejust 31</span>

       <span className="mt-2 text-lg text-[#525354] md:text-2xl">Oyster, 31 mm, Oystersteel and white gold</span>

       <span className="mt-2 text-base text-[#525354] md:text-xl">Reference 278274</span>
      </h1>
     </div>

     {/* BOTTOM CONTROLS */}

     <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
      <button className="flex cursor-pointer flex-col items-center gap-2 font-bold hover:text-[#127749]">
       <span className="text-2xl">☾</span>

       <span>View in night mode</span>
      </button>

      <span className="h-12 w-px bg-[#525354]" />

      <button className="flex cursor-pointer flex-col items-center gap-2 font-bold hover:text-[#127749]">
       <span className="text-xl">360°</span>

       <span>Discover in 360°</span>
      </button>
     </div>

     {/* VIEW VARIATIONS */}

     <div className="absolute bottom-8 right-5 hidden w-[180px] md:block">
      <img
       src={`${ROLEX_MEDIA}/t_v7-model-variation/c_limit,w_640/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m278274-0018`}
       alt="View variations"
       className="h-[150px] w-full object-contain"
      />

      <button className="mt-3 block w-full text-center font-bold hover:text-[#127749]">View variations</button>
     </div>

     {/* SLIDER */}

     <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      <span className="h-16 w-1 rounded bg-[#222]" />
      <span className="h-7 w-1 rounded bg-[#222]" />
      <span className="h-7 w-1 rounded bg-[#222]" />
      <span className="h-7 w-1 rounded bg-[#222]" />
     </div>
    </div>
   </section>

   {/* ========================================================= */}
   {/* INTRO - MAKE A DATE OF A DAY */}
   {/* ========================================================= */}

   <section ref={introRef} className="relative overflow-hidden bg-white">
    <div className="grid min-h-[650px] md:grid-cols-2">
     {/* IMAGE */}

     <div className="order-2 h-[450px] md:order-1 md:h-[700px]">
      <img
       src={`${ROLEX_MEDIA}/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-datejust`}
       alt="Datejust"
       className="h-full w-full object-cover"
      />
     </div>

     {/* TEXT */}

     <div className="order-1 flex items-center bg-[#f5f5f5] px-6 py-20 md:order-2 md:px-16">
      <div className={`max-w-xl transition-all duration-1000 ease-out ${introVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}>
       <p className="text-sm font-semibold uppercase tracking-[0.15em]">Datejust 31</p>

       <h2 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
        Make a date
        <br />
        of a day
       </h2>

       <p className="mt-8 text-lg leading-relaxed text-[#525354] md:text-2xl">
        This Oyster Perpetual Datejust 31 in Oystersteel and white gold features a mint green dial and a Jubilee bracelet.
       </p>
      </div>
     </div>
    </div>
   </section>

   {/* ========================================================= */}
   {/* FLUTED BEZEL */}
   {/* ========================================================= */}

   <section className="relative overflow-hidden">
    <div className="grid min-h-[650px] md:grid-cols-2">
     {/* TEXT */}

     <div className="flex items-center bg-white px-6 py-20 md:px-16">
      <div className="max-w-xl">
       <p className="text-sm font-semibold uppercase tracking-[0.15em]">Fluted bezel</p>

       <h2 className="mt-3 text-4xl font-bold md:text-6xl">A Rolex signature</h2>

       <p className="mt-8 text-lg leading-relaxed text-[#525354] md:text-xl">
        The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto
        the case helping to ensure the waterproofness of the watch.
       </p>

       <p className="mt-6 text-lg leading-relaxed text-[#525354] md:text-xl">
        Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, in gold on this
        Datejust 31.
       </p>
      </div>
     </div>

     {/* IMAGE */}

     <div className="h-[500px] md:h-[750px]">
      <img
       src={`${ROLEX_MEDIA}/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/feature/feature-1-background`}
       alt="Fluted bezel"
       className="h-full w-full object-cover"
      />
     </div>
    </div>
   </section>

   {/* ========================================================= */}
   {/* MINT GREEN DIAL */}
   {/* ========================================================= */}

   <section className="relative overflow-hidden bg-[#f4f4f4]">
    <div className="grid min-h-[700px] md:grid-cols-2">
     {/* IMAGE */}

     <div className="flex items-center justify-center p-8 md:p-20">
      <img
       src={`${ROLEX_MEDIA}/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m278274-0018`}
       alt="Mint green dial"
       className="max-h-[600px] w-full object-contain"
      />
     </div>

     {/* TEXT */}

     <div className="flex items-center px-6 py-20 md:px-20">
      <div className="max-w-xl">
       <p className="text-sm font-semibold uppercase tracking-[0.15em]">Mint green dial</p>

       <h2 className="mt-3 text-4xl font-bold md:text-6xl">
        A watchmaking
        <br />
        technique
       </h2>

       <p className="mt-8 text-lg leading-relaxed text-[#525354] md:text-xl">
        The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing
        techniques that create grooves running outwards from the centre of the dial.
       </p>

       <p className="mt-6 text-lg leading-relaxed text-[#525354] md:text-xl">
        Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.
       </p>

       <p className="mt-6 text-lg leading-relaxed text-[#525354] md:text-xl">
        Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating.
       </p>
      </div>
     </div>
    </div>
   </section>

   {/* ========================================================= */}
   {/* WHITE ROLESOR */}
   {/* ========================================================= */}

   <section className="relative h-[650px] overflow-hidden md:h-screen">
    <img
     src={`${ROLEX_MEDIA}/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/feature/feature-2-background`}
     alt="White Rolesor"
     className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/10" />

    <div className="container relative h-full">
     <div className="absolute bottom-10 left-5 max-w-2xl text-white md:bottom-[15%] md:left-10">
      <p className="text-sm font-semibold uppercase tracking-[0.15em]">White Rolesor</p>

      <h2 className="mt-3 text-4xl font-bold md:text-7xl">
       A meeting
       <br />
       of two metals
      </h2>

      <p className="mt-6 text-lg leading-relaxed md:text-2xl">
       Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties.
      </p>

      <p className="mt-5 text-lg leading-relaxed md:text-xl">A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s.</p>
     </div>
    </div>
   </section>

   {/* ========================================================= */}
   {/* JUBILEE BRACELET */}
   {/* ========================================================= */}

   <section className="relative overflow-hidden bg-white">
    <div className="grid min-h-[700px] md:grid-cols-2">
     {/* TEXT */}

     <div className="flex items-center px-6 py-20 md:px-20">
      <div className="max-w-xl">
       <p className="text-sm font-semibold uppercase tracking-[0.15em]">The Jubilee bracelet</p>

       <h2 className="mt-3 text-4xl font-bold md:text-6xl">
        Supple and
        <br />
        comfortable
       </h2>

       <p className="mt-8 text-lg leading-relaxed text-[#525354] md:text-xl">
        The design, development and production of Rolex bracelets and clasps, as well as the stringent tests they face, involve advanced high technology.
       </p>

       <p className="mt-6 text-lg leading-relaxed text-[#525354] md:text-xl">
        The Jubilee, a supple and comfortable five-piece link metal bracelet, was designed and made especially for the launch of the Oyster Perpetual Datejust
        in 1945.
       </p>
      </div>
     </div>

     {/* IMAGE */}

     <div className="h-[500px] md:h-[750px]">
      <img
       src={`${ROLEX_MEDIA}/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/anim-bracelet-material/portrait-278274-63360/anim-bracelet-material-portrait-278274-63360--0000`}
       alt="Jubilee bracelet"
       className="h-full w-full object-cover"
      />
     </div>
    </div>
   </section>

   {/* ========================================================= */}
   {/* TECHNICAL DETAILS */}
   {/* ========================================================= */}

   <section className="container py-20 md:py-32">
    <div className="mb-12">
     <p className="text-sm font-semibold uppercase tracking-[0.15em]">Reference 278274</p>

     <h2 className="mt-3 text-4xl font-bold md:text-6xl">
      More Datejust
      <br />
      technical details
     </h2>
    </div>

    <ul className="border-t">
     {/* MODEL CASE */}

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h3 className="text-2xl font-bold md:text-3xl">Model case</h3>

       <button onClick={() => handleToggle(0)} className="cursor-pointer" aria-label="Toggle model case">
        {openIndex === 0 ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndex === 0 && (
       <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-16">
        <div className="flex flex-col gap-8 text-lg md:text-xl">
         <div>
          <h4 className="font-bold">Model case</h4>

          <p className="mt-2 text-[#525354]">Oyster, 31 mm, Oystersteel and white gold</p>
         </div>

         <div>
          <h4 className="font-bold">Oyster architecture</h4>

          <p className="mt-2 text-[#525354]">Monobloc middle case, screw-down case back and winding crown</p>
         </div>
        </div>

        <div className="flex flex-col gap-8 text-lg md:text-xl">
         <div>
          <h4 className="font-bold">Diameter</h4>

          <p className="mt-2 text-[#525354]">31 mm</p>
         </div>

         <div>
          <h4 className="font-bold">Material</h4>

          <p className="mt-2 text-[#525354]">White Rolesor - combination of Oystersteel and white gold</p>
         </div>

         <div>
          <h4 className="font-bold">Bezel</h4>

          <p className="mt-2 text-[#525354]">Fluted</p>
         </div>
        </div>

        <div className="flex flex-col gap-8 text-lg md:text-xl">
         <div>
          <h4 className="font-bold">Winding crown</h4>

          <p className="mt-2 text-[#525354]">Screw-down, Twinlock double waterproofness system</p>
         </div>

         <div>
          <h4 className="font-bold">Crystal</h4>

          <p className="mt-2 text-[#525354]">Scratch-resistant sapphire, Cyclops lens over the date</p>
         </div>

         <div>
          <h4 className="font-bold">Water resistance</h4>

          <p className="mt-2 text-[#525354]">Waterproof to 100 metres / 330 feet</p>
         </div>
        </div>
       </div>
      )}
     </li>

     {/* MOVEMENT */}

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h3 className="text-2xl font-bold md:text-3xl">Movement</h3>

       <button onClick={() => handleToggle(1)} className="cursor-pointer" aria-label="Toggle movement">
        {openIndex === 1 ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndex === 1 && (
       <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-16">
        <div className="flex flex-col gap-8 text-lg md:text-xl">
         <div>
          <h4 className="font-bold">Movement</h4>

          <p className="mt-2 text-[#525354]">Perpetual, mechanical, self-winding</p>
         </div>

         <div>
          <h4 className="font-bold">Calibre</h4>

          <p className="mt-2 text-[#525354]">2236, Manufacture Rolex</p>
         </div>

         <div>
          <h4 className="font-bold">Precision</h4>

          <p className="mt-2 text-[#525354]">-2/+2 sec/day, after casing</p>
         </div>
        </div>

        <div className="flex flex-col gap-8 text-lg md:text-xl">
         <div>
          <h4 className="font-bold">Functions</h4>

          <p className="mt-2 text-[#525354]">
           Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting
          </p>
         </div>

         <div>
          <h4 className="font-bold">Oscillator</h4>

          <p className="mt-2 text-[#525354]">Syloxi hairspring in silicon with patented geometry. High-performance Paraflex shock absorbers</p>
         </div>
        </div>

        <div className="flex flex-col gap-8 text-lg md:text-xl">
         <div>
          <h4 className="font-bold">Winding</h4>

          <p className="mt-2 text-[#525354]">Bidirectional self-winding via Perpetual rotor</p>
         </div>

         <div>
          <h4 className="font-bold">Power reserve</h4>

          <p className="mt-2 text-[#525354]">Approximately 55 hours</p>
         </div>
        </div>
       </div>
      )}
     </li>

     {/* BRACELET */}

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h3 className="text-2xl font-bold md:text-3xl">Bracelet</h3>

       <button onClick={() => handleToggle(2)} className="cursor-pointer" aria-label="Toggle bracelet">
        {openIndex === 2 ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndex === 2 && (
       <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-16">
        <div className="text-lg md:text-xl">
         <h4 className="font-bold">Bracelet</h4>

         <p className="mt-2 text-[#525354]">Jubilee, five-piece links</p>
        </div>

        <div className="text-lg md:text-xl">
         <h4 className="font-bold">Material</h4>

         <p className="mt-2 text-[#525354]">Oystersteel</p>
        </div>

        <div className="text-lg md:text-xl">
         <h4 className="font-bold">Clasp</h4>

         <p className="mt-2 text-[#525354]">Concealed folding Crownclasp</p>
        </div>
       </div>
      )}
     </li>

     {/* DIAL */}

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h3 className="text-2xl font-bold md:text-3xl">Dial</h3>

       <button onClick={() => handleToggle(3)} className="cursor-pointer" aria-label="Toggle dial">
        {openIndex === 3 ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndex === 3 && (
       <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-16">
        <div className="text-lg md:text-xl">
         <h4 className="font-bold">Dial</h4>

         <p className="mt-2 text-[#525354]">Mint green</p>
        </div>

        <div className="text-lg md:text-xl">
         <h4 className="font-bold">Details</h4>

         <p className="mt-2 text-[#525354]">Highly legible Chromalight display with long-lasting blue luminescence</p>
        </div>
       </div>
      )}
     </li>

     {/* CERTIFICATION */}

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h3 className="text-2xl font-bold md:text-3xl">Certification</h3>

       <button onClick={() => handleToggle(4)} className="cursor-pointer" aria-label="Toggle certification">
        {openIndex === 4 ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndex === 4 && (
       <div className="mt-16">
        <div className="max-w-3xl text-lg md:text-xl">
         <h4 className="font-bold">Certification</h4>

         <p className="mt-2 text-[#525354]">Superlative Chronometer (official chronometer certification + Rolex certification after casing)</p>
        </div>
       </div>
      )}
     </li>

     {/* USER GUIDE */}

     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h3 className="text-2xl font-bold md:text-3xl">User guide</h3>

       <button onClick={() => handleToggle(5)} className="cursor-pointer" aria-label="Toggle user guide">
        {openIndex === 5 ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndex === 5 && (
       <div className="mt-16">
        <div className="max-w-3xl text-lg md:text-xl">
         <h4 className="font-bold">User guide</h4>

         <p className="mt-2 text-[#525354]">Learn how to set the time and other functions of your Rolex watch by consulting our user guides.</p>

         <button className="mt-8 flex cursor-pointer items-center gap-2 font-bold text-[#127749] hover:text-black">
          <BsDownload size={20} />
          Download user guide
         </button>
        </div>
       </div>
      )}
     </li>
    </ul>
   </section>

   {/* ========================================================= */}
   {/* BROCHURE */}
   {/* ========================================================= */}

   <section className="bg-[#f4f4f4] py-20 md:py-32">
    <div className="container">
     <div className="grid items-center gap-12 md:grid-cols-2">
      <div>
       <p className="text-sm font-semibold uppercase tracking-[0.15em]">Datejust 31</p>

       <h2 className="mt-3 text-4xl font-bold md:text-6xl">Brochure</h2>

       <button className="mt-8 flex items-center gap-2 font-bold text-[#127749] hover:text-black">
        <BsDownload size={20} />
        Download brochure
       </button>
      </div>

      <div className="overflow-hidden">
       <img
        src={`${ROLEX_MEDIA}/t_v7-majesty-shadow/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c-shadow/m278274-0018`}
        alt="Datejust 31"
        className="w-full object-contain"
       />
      </div>
     </div>
    </div>
   </section>

   {/* ========================================================= */}
   {/* RETAILER */}
   {/* ========================================================= */}

   <section className="bg-white py-20 md:py-32">
    <div className="container">
     <div className="grid items-center gap-12 md:grid-cols-2">
      <div className="order-2 h-[450px] md:order-1 md:h-[600px]">
       <img
        src="https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/retailer"
        alt="Rolex retailer"
        className="h-full w-full object-cover"
       />
      </div>

      <div className="order-1 md:order-2 md:pl-10">
       <h2 className="text-4xl font-bold md:text-6xl">
        Contact an
        <br />
        Official Rolex
        <br />
        Retailer
       </h2>

       <p className="mt-8 text-lg leading-relaxed text-[#525354] md:text-xl">
        Only official Rolex retailers are allowed to sell and maintain a Rolex watch. With the necessary skills, technical know-how and special equipment, they
        guarantee the authenticity of each and every part of your Rolex and help you make the choice that will last a lifetime.
       </p>

       <button className="mt-8 rounded-full bg-[#127749] px-7 py-3 font-bold text-white hover:bg-black">Contact a retailer</button>
      </div>
     </div>
    </div>
   </section>

   {/* ========================================================= */}
   {/* PVD */}
   {/* ========================================================= */}

   <section ref={featureRef} className="relative overflow-hidden bg-[#e8e8e8]">
    <div className="grid min-h-[650px] md:grid-cols-2">
     <div className="flex items-center px-6 py-20 md:px-20">
      <div className={`transition-all duration-1000 ease-out ${featureVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}>
       <p className="text-sm font-semibold uppercase tracking-[0.15em]">Vapour of colours</p>

       <h2 className="mt-3 text-4xl font-bold md:text-6xl">PVD Technology</h2>

       <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#525354] md:text-xl">
        Discover the technique used to create some of the distinctive colours found on Rolex watch dials.
       </p>

       <button className="mt-8 flex cursor-pointer items-center gap-2 font-bold text-[#127749] hover:text-black">
        Discover this feature
        <span className="text-2xl">›</span>
       </button>
      </div>
     </div>

     <div className="h-[500px] md:h-[700px]">
      <img
       src="https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/pvd"
       alt="PVD Technology"
       className="h-full w-full object-cover"
      />
     </div>
    </div>
   </section>

   {/* ========================================================= */}
   {/* WATCHES YOU MAY LIKE */}
   {/* ========================================================= */}

   <section className="bg-white py-20 md:py-32">
    <div className="container">
     <div className="mb-12 max-w-xl">
      <h2 className="text-3xl font-bold md:text-5xl">Watches you may like</h2>

      <p className="mt-4 text-lg text-[#525354] md:text-xl">These watches have been selected for you. Add them with the heart icon to your favorites.</p>
     </div>

     <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {/* CARD 1 */}

      <div className="relative min-h-[300px] bg-[#f4f4f4] p-4 md:min-h-[450px] md:p-8">
       <button className="absolute left-4 top-4 z-10 cursor-pointer text-[#127749]">
        <FaHeart />
       </button>

       <div className="flex h-full flex-col">
        <div className="flex flex-1 items-center justify-center">
         <img src="/image/watches/details/m126234-0059.avif" alt="Datejust 36" className="h-[220px] w-full object-contain md:h-[320px]" />
        </div>

        <div>
         <h3 className="text-lg font-bold md:text-2xl">Datejust 36</h3>

         <p className="mt-1 text-sm text-[#525354] md:text-lg">Oyster, 36 mm, Oystersteel and white gold</p>
        </div>
       </div>
      </div>

      {/* CARD 2 */}

      <div className="relative min-h-[300px] bg-[#f4f4f4] p-4 md:min-h-[450px] md:p-8">
       <button className="absolute left-4 top-4 z-10 cursor-pointer text-[#127749]">
        <FaHeart />
       </button>

       <div className="flex h-full flex-col">
        <div className="flex flex-1 items-center justify-center">
         <img src="/image/watches/details/m126200-0010.avif" alt="Datejust 36" className="h-[220px] w-full object-contain md:h-[320px]" />
        </div>

        <div>
         <h3 className="text-lg font-bold md:text-2xl">Datejust 36</h3>

         <p className="mt-1 text-sm text-[#525354] md:text-lg">Oyster, 36 mm, Oystersteel</p>
        </div>
       </div>
      </div>

      {/* CARD 3 */}

      <div className="relative min-h-[300px] bg-[#f4f4f4] p-4 md:min-h-[450px] md:p-8">
       <button className="absolute left-4 top-4 z-10 cursor-pointer text-[#127749]">
        <FaHeart />
       </button>

       <div className="flex h-full flex-col">
        <div className="flex flex-1 items-center justify-center">
         <img src="/image/watches/details/m278240-0011.avif" alt="Datejust 31" className="h-[220px] w-full object-contain md:h-[320px]" />
        </div>

        <div>
         <h3 className="text-lg font-bold md:text-2xl">Datejust 31</h3>

         <p className="mt-1 text-sm text-[#525354] md:text-lg">Oyster, 31 mm, Oystersteel</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </main>
 );
}
