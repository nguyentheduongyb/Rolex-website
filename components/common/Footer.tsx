import Link from "next/link";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";

import { SiSinaweibo, SiWechat, SiTiktok, SiLine } from "react-icons/si";

const Footer = () => {
 const watchLinks = [
  { name: "Air-King", link: "/watches/air-king" },
  { name: "Cosmograph Daytona", link: "/watches/cosmograph-daytona" },
  { name: "Datejust", link: "/watches/datejust" },
  { name: "Lady-Datejust", link: "/watches/lady-datejust" },
  { name: "Day-Date", link: "/watches/day-date" },
  { name: "Explorer", link: "/watches/explorer" },
  { name: "Explorer II", link: "/watches/explorer-ii" },
  { name: "GMT-Master II", link: "/watches/gmt-master-ii" },
  { name: "Land-Dweller", link: "/watches/land-dweller" },
  { name: "Oyster Perpetual", link: "/watches/oyster-perpetual" },
  { name: "Sea-Dweller", link: "/watches/sea-dweller" },
  { name: "Deepsea", link: "/watches/deepsea" },
  { name: "Sky-Dweller", link: "/watches/sky-dweller" },
  { name: "Submariner", link: "/watches/submariner" },
  { name: "Yacht-Master", link: "/watches/yacht-master" },
  { name: "Yacht-Master II", link: "/watches/yacht-master-ii" },
  { name: "1908", link: "/watches/1908" },
 ];

 const discoverLinks = [
  { name: "New watches 2026", link: "/watches/new-watches" },
  { name: "Find your Rolex", link: "/find-your-rolex" },
  { name: "Configure your Rolex", link: "/configure-your-rolex" },
  { name: "Men's watches", link: "/watches/mens" },
  { name: "Women's watches", link: "/watches/womens" },
  { name: "Gold watches", link: "/watches/gold" },
 ];

 const accessoriesLinks = [
  {
   name: "Accessories",
   link: "/accessories",
  },
 ];

 const watchmakingLinks = [
  {
   name: "Rolex anatomy",
   link: "/watchmaking/anatomy",
  },
 ];

 const oysterStoryLinks = [
  {
   name: "The film",
   link: "/oyster-story/oyster-film",
  },
 ];

 const aboutRolexLinks = [
  {
   name: "Sustainability",
   link: "/about-rolex/sustainable-development",
  },
  {
   name: "Behind the crown",
   link: "/about-rolex/behind-the-crown",
  },
  {
   name: "History",
   link: "/about-rolex/history",
  },
 ];

 const sportsLinks = [
  {
   name: "Rolex and sports",
   link: "/sports",
  },
  {
   name: "Perpetual Planet",
   link: "/perpetual-planet",
  },
  {
   name: "Perpetual Arts",
   link: "/perpetual-arts",
  },
 ];

 const rolexFamilyLinks = [
  {
   name: "The Rolex family",
   link: "/about-rolex",
  },
 ];

 const buyingLinks = [
  {
   name: "Buying a Rolex",
   link: "/buying-a-rolex",
  },
  {
   name: "Rolex Certified Pre-Owned",
   link: "/certified-pre-owned",
  },
  {
   name: "Servicing your Rolex",
   link: "/servicing",
  },
  {
   name: "Caring for your Rolex",
   link: "/caring-for-your-rolex",
  },
 ];

 const locationLinks = [
  {
   name: "Store locator",
   link: "/store-locator",
  },
  {
   name: "Service Centre locator",
   link: "/service-centre-locator",
  },
 ];

 const supportLinks = [
  {
   name: "Frequently asked questions",
   link: "/frequently-asked-questions",
  },
  {
   name: "File a report",
   link: "/file-a-report",
  },
 ];

 const accessibilityLinks = [
  {
   name: "Read our statement",
   link: "/accessibility",
  },
 ];

 const mediaLinks = [
  {
   name: "Wallpapers",
   link: "/media/wallpapers",
  },
  {
   name: "Brochures",
   link: "/media/brochures",
  },
  {
   name: "User guides",
   link: "/media/user-guides",
  },
 ];

 const socialLinks = [
  {
   name: "YouTube",
   link: "https://www.youtube.com",
   icon: <FaYoutube />,
  },
  {
   name: "Instagram",
   link: "https://www.instagram.com",
   icon: <FaInstagram />,
  },
  {
   name: "Facebook",
   link: "https://www.facebook.com",
   icon: <FaFacebookF />,
  },
  {
   name: "LinkedIn",
   link: "https://www.linkedin.com",
   icon: <FaLinkedinIn />,
  },
  {
   name: "Pinterest",
   link: "https://www.pinterest.com",
   icon: <FaPinterestP />,
  },
  {
   name: "Weibo",
   link: "#",
   icon: <SiSinaweibo />,
  },
  {
   name: "WeChat",
   link: "#",
   icon: <SiWechat />,
  },
  {
   name: "Douyin",
   link: "#",
   icon: <SiTiktok />,
  },
  {
   name: "Line",
   link: "#",
   icon: <SiLine />,
  },
 ];

 const platformLinks = [
  {
   name: "Newsroom",
   link: "/newsroom",
  },
  {
   name: "Rolex.org",
   link: "https://www.rolex.org",
  },
 ];

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
       <FaFacebookF className="w-[20px] h-[20px]" />
      </Link>
      <Link href="">
       <FaInstagram className="w-[20px] h-[20px]" />
      </Link>
      <Link href="">
       <BsTwitter className="w-[20px] h-[20px]" />
      </Link>
     </div>
    </div>
   </section>
   <section className="bg-[#f5f5f5] py-10 text-[#30343b] md:py-16">
    <div className="container md:w-3/5 mx-auto">
     <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-20">
      {/* ================= CỘT 1 ================= */}
      <div>
       <h2 className="mb-3 text-sm font-bold leading-tight md:text-2xl">
        Rolex watches and
        <br />
        accessories
       </h2>

       <div className="flex flex-col gap-2">
        {watchLinks.map((item) => (
         <Link key={item.name} href={item.link} className="text-xs transition hover:text-[#127749] md:text-base">
          {item.name}
         </Link>
        ))}
       </div>

       <div className="mt-8 flex flex-col gap-2">
        {discoverLinks.map((item) => (
         <Link key={item.name} href={item.link} className="text-xs transition hover:text-[#127749] md:text-base">
          {item.name}
         </Link>
        ))}
       </div>

       <div className="mt-8 flex flex-col gap-2">
        {accessoriesLinks.map((item) => (
         <Link key={item.name} href={item.link} className="text-xs transition hover:text-[#127749] md:text-base">
          {item.name}
         </Link>
        ))}
       </div>

       {/* MOBILE ONLY */}
       <div className="mt-10 md:hidden">
        <h2 className="mb-2 text-sm font-bold">Watchmaking</h2>

        <div className="flex flex-col gap-2">
         {watchmakingLinks.map((item) => (
          <Link key={item.name} href={item.link} className="text-xs hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>
       </div>

       <div className="mt-8 md:hidden">
        <h2 className="mb-2 text-sm font-bold">Oyster Story</h2>

        <div className="flex flex-col gap-2">
         {oysterStoryLinks.map((item) => (
          <Link key={item.name} href={item.link} className="text-xs hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>
       </div>

       <div className="mt-8 md:hidden">
        <h2 className="mb-2 text-sm font-bold">About Rolex</h2>

        <div className="flex flex-col gap-2">
         {aboutRolexLinks.map((item) => (
          <Link key={item.name} href={item.link} className="text-xs hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>
       </div>

       <div className="mt-8 md:hidden">
        <h2 className="mb-2 text-sm font-bold">Sports, Arts and Planet</h2>

        <div className="flex flex-col gap-2">
         {sportsLinks.map((item) => (
          <Link key={item.name} href={item.link} className="text-xs hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>
       </div>
      </div>

      {/* ================= CỘT 2 ================= */}

      <div>
       {/* MOBILE: BUYING HIỆN ĐẦU CỘT */}
       <div className="md:hidden">
        <h2 className="mb-2 text-sm font-bold leading-tight">
         Buying and
         <br />
         servicing
        </h2>

        <div className="flex flex-col gap-2">
         {buyingLinks.map((item) => (
          <Link key={item.name} href={item.link} className="text-xs hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>

        <div className="mt-6 flex flex-col gap-2">
         {locationLinks.map((item) => (
          <Link key={item.name} href={item.link} className="text-xs hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>
       </div>

       {/* DESKTOP */}
       <div className="hidden md:block">
        <div className="mb-8">
         <h2 className="mb-2 text-2xl font-bold">Watchmaking</h2>

         {watchmakingLinks.map((item) => (
          <Link key={item.name} href={item.link} className="block hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>

        <div className="mb-8">
         <h2 className="mb-2 text-2xl font-bold">Oyster Story</h2>

         {oysterStoryLinks.map((item) => (
          <Link key={item.name} href={item.link} className="block hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>

        <div className="mb-8">
         <Link href="/about-rolex" className="mb-2 text-2xl font-bold">
          About Rolex
         </Link>

         <div className="flex flex-col gap-2">
          {aboutRolexLinks.map((item) => (
           <Link key={item.name} href={item.link} className="hover:text-[#127749]">
            {item.name}
           </Link>
          ))}
         </div>
        </div>

        <div className="mb-8">
         <h2 className="mb-2 text-2xl font-bold">
          Sports, Arts and
          <br />
          Planet
         </h2>

         <div className="flex flex-col gap-2">
          {sportsLinks.map((item) => (
           <Link key={item.name} href={item.link} className="hover:text-[#127749]">
            {item.name}
           </Link>
          ))}
         </div>
        </div>

        <div className="mb-8">
         {rolexFamilyLinks.map((item) => (
          <Link key={item.name} href={item.link} className="hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>

        <div>
         <h2 className="mb-2 text-2xl font-bold">Buying and servicing</h2>

         <div className="flex flex-col gap-2">
          {buyingLinks.map((item) => (
           <Link key={item.name} href={item.link} className="hover:text-[#127749]">
            {item.name}
           </Link>
          ))}
         </div>

         <div className="mt-8 flex flex-col gap-2">
          {locationLinks.map((item) => (
           <Link key={item.name} href={item.link} className="hover:text-[#127749]">
            {item.name}
           </Link>
          ))}
         </div>
        </div>
       </div>

       {/* MOBILE: SUPPORT */}
       <div className="mt-10 md:hidden">
        <h2 className="mb-2 text-sm font-bold">Help and support</h2>

        <div className="flex flex-col gap-2">
         {supportLinks.map((item) => (
          <Link key={item.name} href={item.link} className="text-xs hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>
       </div>

       <div className="mt-8 md:hidden">
        <h2 className="mb-2 text-sm font-bold">Accessibility</h2>

        {accessibilityLinks.map((item) => (
         <Link key={item.name} href={item.link} className="text-xs hover:text-[#127749]">
          {item.name}
         </Link>
        ))}
       </div>

       <div className="mt-8 md:hidden">
        <h2 className="mb-2 text-sm font-bold">Media</h2>

        <div className="flex flex-col gap-2">
         {mediaLinks.map((item) => (
          <Link key={item.name} href={item.link} className="text-xs hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>
       </div>

       <div className="mt-8 md:hidden">
        <h2 className="mb-3 text-sm font-bold">Official channels</h2>

        <div className="flex flex-col gap-2">
         {socialLinks.map((item) => (
          <Link key={item.name} href={item.link} className="flex items-center gap-2 text-xs hover:text-[#127749]">
           {item.icon}
           <span>{item.name}</span>
          </Link>
         ))}
        </div>
       </div>
      </div>

      {/* ================= CỘT 3 - DESKTOP ================= */}

      <div className="col-span-2 hidden md:block md:col-span-1">
       <div className="mb-8">
        <h2 className="mb-2 font-bold">Help and support</h2>

        <div className="flex flex-col gap-2">
         {supportLinks.map((item) => (
          <Link key={item.name} href={item.link} className="hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>
       </div>

       <div className="mb-8">
        <h2 className="mb-2 font-bold">Accessibility</h2>

        {accessibilityLinks.map((item) => (
         <Link key={item.name} href={item.link} className="hover:text-[#127749]">
          {item.name}
         </Link>
        ))}
       </div>

       <div className="mb-8">
        <h2 className="mb-2 font-bold">Media</h2>

        <div className="flex flex-col gap-2">
         {mediaLinks.map((item) => (
          <Link key={item.name} href={item.link} className="hover:text-[#127749]">
           {item.name}
          </Link>
         ))}
        </div>
       </div>

       <div className="mb-8">
        <h2 className="mb-3 font-bold">Official channels</h2>

        <div className="flex flex-col gap-2">
         {socialLinks.map((item) => (
          <Link
           key={item.name}
           href={item.link}
           target={item.link.startsWith("http") ? "_blank" : undefined}
           className="flex items-center gap-2 hover:text-[#127749]">
           {item.icon}

           <span>{item.name}</span>
          </Link>
         ))}
        </div>
       </div>

       <div>
        <h2 className="mb-3 font-bold">Our platforms</h2>

        <div className="flex flex-col gap-2">
         {platformLinks.map((item) => (
          <Link key={item.name} href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} className="hover:text-[#127749]">
           {item.name} ↗
          </Link>
         ))}
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </footer>
 );
};

Footer.Layout = "Default";

export default Footer;
