import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Search() {
 const [activeTab, setActiveTab] = useState("all");
 const tabs = [
  { id: "all", label: "All" },
  { id: "collection", label: "Collection" },
  { id: "article", label: "Article" },
 ];
 return (
  <div>
   <section className="flex gap-4 mt-6 justify-center text-lg font-medium">
    <button onClick={() => setActiveTab("all")} className={activeTab === "all" ? "text-[#127749]" : "text-black"}>
     All
    </button>

    <button onClick={() => setActiveTab("collection")} className={activeTab === "collection" ? "text-[#127749]" : "text-black"}>
     Collection
    </button>

    <button onClick={() => setActiveTab("article")} className={activeTab === "article" ? "text-[#127749]" : "text-black"}>
     Article
    </button>
   </section>

   {(activeTab === "all" || activeTab === "collection") && (
    <section className="bg-white py-16">
     <div className="container">
      <div className="lg:w-1/3 mb-10">
       <h2 className="mb-2 text-5xl font-medium">Collection</h2>

       <p>Browse Rolex watches and accessories based on your search</p>
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
          <h3 className="mb-1 text-[16px] font-medium md:mb-2 md:text-2xl">Datejust 36</h3>

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
        <span className="absolute hidden md:bottom-8 md:left-8 md:block md:text-lg md:font-medium">New model</span>
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
          <h3 className="mb-1 text-[16px] font-medium md:mb-2 md:text-2xl">Datejust 36</h3>

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
        <span className="absolute hidden md:bottom-8 md:left-8 md:block md:text-lg md:font-medium">New model</span>
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
          <h3 className="mb-1 text-[16px] font-medium md:mb-2 md:text-2xl">Datejust 36</h3>

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
        <span className="absolute hidden md:bottom-8 md:left-8 md:block md:text-lg md:font-medium">New model</span>
       </div>
      </div>
     </div>
    </section>
   )}

   {(activeTab === "all" || activeTab === "article") && (
    <section className="container mx-auto px-5 py-10">
     <div className="mb-6">
      <h2 className="text-2xl font-bold md:text-5xl">Articles</h2>
      <p className="mt-1 text-[10px] md:text-lg">Explore articles related to your search</p>
     </div>

     <div className="flex gap-2 overflow-x-auto md:grid md:grid-cols-3 md:gap-2 md:overflow-visible">
      {/* Article 1 */}
      <article className="group w-[75%] shrink-0 md:w-auto">
       <a href="#">
        <figure className="aspect-[530/355] overflow-hidden">
         <img
          src="https://media.rolex.com/q_auto/f_auto/rolexcom/collection/family-pages/classic-watches/lady-datejust/search/classic-watches-lady-datejust-search-inspring-women-video.jpg?imwidth=640"
          alt="Lady-Datejust - Inspiring women"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
         />
        </figure>

        <div className="mt-1">
         <span className="text-[6px] uppercase tracking-[0.12em] md:text-xs">Watches</span>
         <h3 className="text-[7px] font-bold md:text-base">Lady-Datejust - Inspiring women</h3>
        </div>
       </a>
      </article>

      {/* Article 2 */}
      <article className="group w-[75%] shrink-0 md:w-auto">
       <a href="#">
        <figure className="aspect-[530/355] overflow-hidden">
         <img
          src="/image/articles/article-2.avif"
          alt="Lady-Datejust - A wealth of versions"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
         />
        </figure>

        <div className="mt-1">
         <span className="text-[6px] uppercase tracking-[0.12em] md:text-xs">Watches</span>
         <h3 className="text-[7px] font-bold md:text-base">Lady-Datejust - A wealth of versions</h3>
        </div>
       </a>
      </article>

      {/* Article 3 */}
      <article className="group w-[75%] shrink-0 md:w-auto">
       <a href="#">
        <figure className="aspect-[530/355] overflow-hidden">
         <img
          src="/image/articles/article-3.avif"
          alt="New Datejust 41"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
         />
        </figure>

        <div className="mt-1">
         <span className="text-[6px] uppercase tracking-[0.12em] md:text-xs">New watches 2026</span>
         <h3 className="text-[7px] font-bold md:text-base">New Datejust 41</h3>
        </div>
       </a>
      </article>

      {/* Article 4 */}
      <article className="group w-[75%] shrink-0 md:w-auto">
       <a href="#">
        <figure className="aspect-[530/355] overflow-hidden">
         <img
          src="/image/articles/article-4.avif"
          alt="Datejust"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
         />
        </figure>

        <div className="mt-1">
         <span className="text-[6px] uppercase tracking-[0.12em] md:text-xs">Watches</span>
         <h3 className="text-[7px] font-bold md:text-base">Datejust - Discover the collection</h3>
        </div>
       </a>
      </article>

      {/* Article 5 */}
      <article className="group w-[75%] shrink-0 md:w-auto">
       <a href="#">
        <figure className="aspect-[530/355] overflow-hidden">
         <img
          src="/image/articles/article-5.avif"
          alt="Rolex watch"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
         />
        </figure>

        <div className="mt-1">
         <span className="text-[6px] uppercase tracking-[0.12em] md:text-xs">Watches</span>
         <h3 className="text-[7px] font-bold md:text-base">The Oyster Perpetual Datejust</h3>
        </div>
       </a>
      </article>

      {/* Article 6 */}
      <article className="group w-[75%] shrink-0 md:w-auto">
       <a href="#">
        <figure className="aspect-[530/355] overflow-hidden">
         <img
          src="/image/articles/article-6.avif"
          alt="Rolex watch"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
         />
        </figure>

        <div className="mt-1">
         <span className="text-[6px] uppercase tracking-[0.12em] md:text-xs">Watches</span>
         <h3 className="text-[7px] font-bold md:text-base">A timeless classic</h3>
        </div>
       </a>
      </article>
     </div>
    </section>
   )}
  </div>
 );
}
Search.Layout = "Default";
