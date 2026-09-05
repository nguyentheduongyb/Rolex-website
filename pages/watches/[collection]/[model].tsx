import { useRouter } from "next/router";
import { useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";

import PoliciesPopper from "~/components/popper/information/Policies";
import { BsDownload } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { rolexWatches } from "~/data/rolexWatches";
import WatchCards from "~/components/watches/WatchesYouMayLike";
import WatchesYouMayLike from "~/components/watches/WatchesYouMayLike";

export default function Model() {
 const router = useRouter();
 const { collection, model } = router.query;

 const [isOpenPoliciesPopper, setIsOpenPoliciesPopper] = useState(false);
 const [openIndexes, setOpenIndexes] = useState<number[]>([]);

 const handleToggle = (index: number) => {
  setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]));
 };

 const currentWatch = rolexWatches.find(
  (watch) => watch.slug.toLowerCase() === String(collection || "").toLowerCase() && watch.id.toLowerCase() === String(model || "").toLowerCase(),
 );

 if (!router.isReady) return null;

 if (!currentWatch) {
  return <div className="flex min-h-screen items-center justify-center">Watch not found</div>;
 }

 const watch = currentWatch;

 const formattedPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: watch.currency || "$",
  maximumFractionDigits: 0,
 }).format(watch.priceNew);

 const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem("rolex_cart") || "[]");

  const existingProduct = cart.find((item: any) => item.id === watch.id);

  if (existingProduct) {
   // Đã đạt số lượng tối đa
   if (existingProduct.quantity >= 2) {
    alert("You can only add a maximum of 2 watches of the same model to your shopping bag.");

    return;
   }

   // Tăng số lượng
   existingProduct.quantity += 1;
  } else {
   // Chưa có sản phẩm trong cart
   cart.push({
    ...watch,
    quantity: 1,
   });
  }

  // Lưu vào localStorage
  localStorage.setItem("rolex_cart", JSON.stringify(cart));

  // Cập nhật CartHeader
  window.dispatchEvent(new Event("cartAdded"));
 };

 return (
  <div>
   {isOpenPoliciesPopper ? <PoliciesPopper isOpenPoliciesPopper={isOpenPoliciesPopper} onClose={() => setIsOpenPoliciesPopper(false)} /> : ""}

   {/* HERO */}
   <section className="bg-[#D8D8D8]">
    <div className="container relative h-[680px] md:h-[570px]">
     {/* ADD TO FAVOURITES */}
     <button className="absolute left-0 top-6 z-1 flex cursor-pointer items-center gap-1 text-[14px] font-bold text-primary hover:text-black md:top-[190px] md:gap-2 md:text-base">
      <FaHeart />
      <span>Add to favourites</span>
     </button>

     {/* BACKGROUND */}
     <figure className="absolute inset-0 aspect-[400/320] md:aspect-[837/314]">
      <img
       className="h-full w-full object-contain"
       src="https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-glimmer-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/reflection/glimmer-36"
       alt={watch.name}
      />
     </figure>

     {/* MAIN WATCH */}
     <figure className="absolute left-1/2 flex h-[400px] w-[400px] -translate-x-1/2 items-center justify-center md:h-[500px] md:w-[460px]">
      <img className="h-full w-full object-contain" src={watch.images.main} alt={watch.name} />
     </figure>

     {/* PRODUCT INFORMATION */}
     <div className="absolute bottom-[70px] left-0 w-[70%] md:bottom-auto md:top-[245px] md:w-[40%]">
      <h1 className="flex flex-col gap-2">
       <span className="text-xl font-bold md:text-4xl">{watch.name}</span>

       <span className="flex items-center text-[#525354] md:text-xl">{watch.title}</span>

       <span className="text-[#525354] md:text-xl">Reference {watch.reference}</span>

       <div className="flex items-center gap-1">
        <span className="text-[#525354] md:text-xl">{formattedPrice}</span>

        <button onClick={() => setIsOpenPoliciesPopper(true)}>
         <HiOutlineInformationCircle color="#525354" size={24} />
        </button>
       </div>

       <button
        onClick={handleAddToCart}
        className="mt-4 rounded-full bg-[var(--primary-color)] py-2 font-bold text-white hover:opacity-90 md:mt-5 md:w-[240px]">
        Add to cart
       </button>
      </h1>
     </div>

     {/* VIEW VARIATIONS */}
     <div className="absolute right-6 top-[235px] flex flex-col items-center md:top-[190px] md:w-[25%]">
      <div className="flex h-[95px] w-[90px] items-center justify-center md:h-[220px] md:w-full">
       <img className="h-full w-full object-contain" src={watch.dial.image} alt="View variations" />
      </div>

      <button className="mt-1 cursor-pointer text-[7px] font-bold hover:text-primary md:mt-2 md:text-base">View variations</button>
     </div>

     {/* RIGHT SLIDER */}
     <div className="absolute right-0 top-[180px] flex -translate-x-1/2 flex-col gap-3 md:gap-4">
      <span className="h-8 w-[2px] rounded bg-[#222] md:h-16 md:w-1"></span>
      <span className="h-5 w-[2px] rounded bg-[#222] md:h-7 md:w-1"></span>
      <span className="h-5 w-[2px] rounded bg-[#222] md:h-7 md:w-1"></span>
      <span className="h-5 w-[2px] rounded bg-[#222] md:h-7 md:w-1"></span>
     </div>

     {/* NIGHT MODE / 360 */}
     {/* <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 md:bottom-6 md:gap-5">
      <button className="flex cursor-pointer items-center justify-center font-bold hover:text-primary">
       <span className="text-base md:text-2xl">☾</span>
       <span className="ml-2 hidden md:block">View in night mode</span>
      </button>

      <span className="h-5 w-px bg-[#525354] md:h-12"></span>

      <button className="flex cursor-pointer items-center justify-center font-bold hover:text-primary">
       <span className="text-[8px] md:text-xl">360°</span>
       <span className="ml-2 hidden md:block">Discover in 360°</span>
      </button>
     </div> */}
    </div>
   </section>

   {/* SECTION FEATURES */}
   <section
    className="relative aspect-[400/600] w-full bg-cover bg-center bg-no-repeat lg:aspect-[1920/800]"
    style={{
     backgroundImage: `url(${watch.contentPage.features.image.desktop})`,
    }}>
    <div className="absolute inset-0 h-full w-full bg-[rgba(66,105,75,0.6)]"></div>

    <div className="absolute inset-0 flex items-center justify-center gap-4">
     <div className="container md:w-1/2">
      <p className="text-2xl uppercase text-[rgb(164,204,174)]">{watch.contentPage.features.title}</p>

      <h2 className="text-4xl font-bold text-white md:text-6xl">{watch.contentPage.features.description}</h2>
     </div>
    </div>
   </section>

   {/* SECTION BEZEL */}
   <section>
    <div className="container grid items-center justify-center gap-8 py-12 md:w-3/4 md:grid-cols-2">
     <figure
      className="aspect-[400/400] bg-contain bg-no-repeat"
      style={{
       backgroundImage: `url(${watch.contentPage.bezel.image.desktop})`,
      }}
     />

     <div className="flex flex-col gap-4">
      <p className="text-2xl uppercase">{watch.contentPage.bezel.title}</p>

      <h2 className="text-4xl font-bold text-[rgb(66,105,75)] md:text-6xl">{watch.contentPage.bezel.highlights[0]?.title}</h2>

      {watch.contentPage.bezel.highlights.map((highlight, index) => (
       <p key={index} className="text-xl font-light md:text-2xl">
        {highlight.description}
       </p>
      ))}
     </div>
    </div>
   </section>

   {/* SECTION DIAL */}
   <section>
    <div className="container grid items-center justify-center gap-8 py-12 md:w-3/4 md:grid-cols-2">
     <figure
      className="aspect-[400/400] bg-contain bg-no-repeat"
      style={{
       backgroundImage: `url(${watch.contentPage.dial.image.desktop})`,
      }}
     />

     <div className="flex flex-col gap-4">
      <p className="text-2xl uppercase">{watch.contentPage.dial.title}</p>

      <h2 className="text-4xl font-bold text-[rgb(66,105,75)] md:text-6xl">{watch.contentPage.dial.highlights[0]?.title}</h2>

      {watch.contentPage.dial.highlights.map((highlight, index) => (
       <p key={index} className="text-xl font-light md:text-2xl">
        {highlight.description}
       </p>
      ))}
     </div>
    </div>
   </section>

   {/* SECTION ROLESOR */}
   <section className="bg-[#E3E5E9]">
    <div className="container grid items-center justify-center gap-8 py-12 md:w-3/4 md:grid-cols-2">
     <div className="flex flex-col gap-8 md:gap-32">
      <div className="flex flex-col gap-4">
       <p className="text-2xl uppercase">{watch.contentPage.rolesor[0].title}</p>

       <h2 className="text-4xl font-bold text-[rgb(66,105,75)] md:text-6xl">{watch.contentPage.rolesor[0].highlights[0]?.title}</h2>

       {watch.contentPage.rolesor[0].highlights.map((highlight, index) => (
        <p key={index} className="text-xl font-light md:text-2xl">
         {highlight.description}
        </p>
       ))}
      </div>
      {(watch.contentPage.rolesor[0].image?.mobile || watch.contentPage.rolesor[0].image?.desktop) && (
       <figure
        className="md:hidden aspect-[400/400] bg-center bg-no-repeat"
        style={{
         backgroundImage: `url(${watch.contentPage.rolesor[0].image.desktop})`,
        }}></figure>
      )}

      {watch.contentPage.rolesor[1] && (
       <div className="flex flex-col gap-4">
        <p className="text-2xl uppercase">{watch.contentPage.rolesor[1].title || ""}</p>

        <h2 className="text-4xl font-bold text-[rgb(66,105,75)] md:text-6xl">{watch.contentPage.rolesor[1].highlights[0]?.title}</h2>

        {watch.contentPage.rolesor[1].highlights.map((highlight, index) => (
         <p key={index} className="text-xl font-light md:text-2xl">
          {highlight.description}
         </p>
        ))}
       </div>
      )}
     </div>
     {watch.contentPage.rolesor[1] && (
      <figure
       className="hidden md:block aspect-[400/400] bg-center bg-no-repeat"
       style={{
        backgroundImage: `url(${watch.contentPage.rolesor[1].image.desktop})`,
       }}></figure>
     )}
    </div>
   </section>

   {/* SECTION MORE */}
   <section className="container py-12 md:w-3/4">
    <div className="relative">
     <div className="absolute inset-0">
      <h2 className="text-2xl font-bold md:text-5xl md:leading-[55px]">
       More {watch.collection}
       <br />
       <span className="text-[var(--primary-color)]">technical detail</span>
      </h2>

      <div className="mt-2 md:mt-6 flex gap-2 text-xl">
       <span className="font-bold">Reference</span>
       <span>{watch.reference}</span>
      </div>
     </div>

     <div className="relative">
      <figure>
       <img className="mx-auto w-[420px]" src={watch.images.main} alt={watch.name} />
      </figure>
      <figure className="w-full absolute inset-0">
       <img
        className="mx-auto w-[420px] mt-4"
        src="https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-majesty-shadow/c_limit,w_240/v1/a677b2c664f6/catalogue/2026/upright-c-shadow/m126234-0051"
        alt=""
       />
      </figure>
     </div>
    </div>
   </section>

   {/* SECTION INFORMATION */}
   <section className="container py-12 md:w-3/4">
    <ul className="border-t">
     {/* MODEL CASE */}
     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Model case</h4>

       <button onClick={() => handleToggle(0)} className="cursor-pointer">
        {openIndexes.includes(0) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(0) && (
       <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-16 text-xl">
        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Model case</h5>
          <p>{watch.case.model}</p>
         </div>

         <div>
          <h5 className="font-bold">Oyster architecture</h5>
          <p>{watch.case.architecture}</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xll">
         <div>
          <h5 className="font-bold">Diameter</h5>
          <p>{watch.case.diameter}</p>
         </div>

         <div>
          <h5 className="font-bold">Material</h5>
          <p>{watch.case.material}</p>
         </div>

         <div>
          <h5 className="font-bold">Bezel</h5>
          <p>{watch.case.bezel}</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Winding crown</h5>
          <p>{watch.case.windingCrown}</p>
         </div>

         <div>
          <h5 className="font-bold">Crystal</h5>
          <p>{watch.case.crystal}</p>
         </div>

         <div>
          <h5 className="font-bold">Water resistance</h5>
          <p>{watch.case.waterResistance}</p>
         </div>
        </div>
       </div>
      )}
     </li>

     {/* MOVEMENT */}
     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Movement</h4>

       <button onClick={() => handleToggle(1)} className="cursor-pointer">
        {openIndexes.includes(1) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(1) && (
       <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-16 text-xl">
        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Movement</h5>
          <p>{watch.movement.type}</p>
         </div>

         <div>
          <h5 className="font-bold">Calibre</h5>
          <p>{watch.movement.calibre}</p>
         </div>

         <div>
          <h5 className="font-bold">Precision</h5>
          <p>{watch.movement.precision}</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Functions</h5>
          <p>{watch.movement.functions}</p>
         </div>

         <div>
          <h5 className="font-bold">Oscillator</h5>
          <p>{watch.movement.oscillator}</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Winding</h5>
          <p>{watch.movement.winding}</p>
         </div>

         <div>
          <h5 className="font-bold">Power reserve</h5>
          <p>{watch.movement.powerReserve}</p>
         </div>
        </div>
       </div>
      )}
     </li>

     {/* BRACELET */}
     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Bracelet</h4>

       <button onClick={() => handleToggle(2)} className="cursor-pointer">
        {openIndexes.includes(2) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(2) && (
       <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-16 text-xl">
        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Bracelet</h5>
          <p>{watch.bracelet.type}</p>
         </div>

         <div>
          <h5 className="font-bold">Material</h5>
          <p>{watch.bracelet.material}</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Clasp</h5>
          <p>{watch.bracelet.clasp}</p>
         </div>
        </div>
       </div>
      )}
     </li>

     {/* DIAL */}
     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Dial</h4>

       <button onClick={() => handleToggle(3)} className="cursor-pointer">
        {openIndexes.includes(3) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(3) && (
       <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-16 text-xl">
        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Dial</h5>
          <p>{watch.contentPage.dial.title}</p>
         </div>
        </div>

        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Details</h5>
          <p>{watch.contentPage.dial.highlights.map((item) => item.description).join(" ")}</p>
         </div>
        </div>
       </div>
      )}
     </li>

     {/* CERTIFICATION */}
     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">Certification</h4>

       <button onClick={() => handleToggle(4)} className="cursor-pointer">
        {openIndexes.includes(4) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(4) && (
       <div className="mt-16 grid gap-4 md:gap-16 text-xl">
        <div className="flex flex-col gap-4 text-xl">
         <div>
          <h5 className="font-bold">Certification</h5>
          <p>{watch.certification}</p>
         </div>
        </div>
       </div>
      )}
     </li>

     {/* USER GUIDE */}
     <li className="border-b py-8">
      <div className="flex items-center justify-between">
       <h4 className="text-2xl font-bold hover:text-[var(--primary-color)] md:text-3xl">User guide</h4>

       <button onClick={() => handleToggle(5)} className="cursor-pointer">
        {openIndexes.includes(5) ? <FaMinus size={18} /> : <FaPlus size={18} />}
       </button>
      </div>

      {openIndexes.includes(5) && (
       <div className="mt-16 grid gap-4 md:gap-16">
        <div className="flex flex-col gap-4 text-xl">
         <div>
          <p className="text-lg">Learn how to set the time and other functions of your Rolex watch by consulting our user guides.</p>
          <div>Download the user guide</div>
         </div>
        </div>

        {watch.documents.userGuide && (
         <Link href={watch.documents.userGuide} className="ml-6 flex items-center gap-2 text-xl font-bold text-[var(--primary-color)] md:text-xl">
          <BsDownload />
          Download User Guide
         </Link>
        )}
       </div>
      )}
     </li>
    </ul>
   </section>

   {/* BROCHURE */}
   <section className="py-10">
    <div className="mx-auto mb-12 flex flex-col items-center gap-10">
     <h2 className="text-xl uppercase md:text-2xl">{watch.name}</h2>

     <h3 className="text-6xl font-medium md:text-8xl">Brochure</h3>

     {watch.documents.brochure && (
      <Link href={watch.documents.brochure.link} className="flex items-center justify-center gap-2 text-xl font-medium text-[var(--primary-color)] md:text-lg">
       <BsDownload />
       Download Brochure
      </Link>
     )}
    </div>

    <div className="container grid grid-rows items-center gap-20 md:w-2/3 md:grid-cols-2">
     <img className="h-full w-full" src={watch.documents.brochure.image} alt={watch.documents.brochure.image} />

     <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-bold md:text-4xl">Contact an Official Rolex Retailer</h2>

      <p className="text-lg font-light md:text-xl">
       Only official Rolex retailers are allowed to sell and maintain a Rolex watch. With the necessary skills, technical know-how and special equipment, they
       guarantee the authenticity of each and every part of your Rolex and help you make the choice that will last a lifetime.
      </p>

      <Link className="mt-2 text-xl font-bold text-[var(--primary-color)] hover:text-black" href="">
       Contact a retailer &gt;
      </Link>
     </div>
    </div>
   </section>

   {/* DISCOVER */}
   <section className="relative px-4 aspect-[400/500] md:aspect-[1526/275] bg-no-repeat bg-center bg-[url('https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1//rolexcom/model-page/editorial-push/fixed/model-page-editorial-push-fixed-watchmaking-cyclops-lens-2023_watchmaking_features_cyclop_lens_still_ooh_master_rvb')]">
    <div className="container absolute inset-0 flex h-full flex-col justify-center gap-2">
     <h2 className="text-6xl font-bold">At a single glance</h2>

     <p className="text-4xl font-light">Cyclops lens</p>

     <Link className="mt-2 text-xl font-bold" href="">
      Discover this feature &gt;
     </Link>
    </div>
   </section>

   {/* WATCHES YOU MAY LIKE */}
   <WatchesYouMayLike watch={watch} />

   {/* NEXT COLLECTION */}
   <section className="p-8 text-center">
    <Link href={`/watches/${watch.slug}`} className="flex flex-col gap-8 font-bold text-primary">
     <p>NEXT</p>

     <span className="text-3xl font-bold md:text-6xl">
      Introduction to
      <br />
      the {watch.collection}
     </span>

     <button className="mx-auto block rounded-full bg-[var(--primary-color)] px-6 py-2 text-white md:text-xl">Continue</button>
    </Link>
   </section>
  </div>
 );
}

Model.Layout = "Default";
