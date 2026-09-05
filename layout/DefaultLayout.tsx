import React, { PropsWithChildren } from "react";
import Head from "next/head";

import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";
const DefaultLayout = ({ children }: PropsWithChildren) => {
 return (
  <>
   <Head>
    <link rel="icon" href="/logo.png" />
    <title>Official Rolex Website - Swiss Luxury Watches</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <meta property="og:title" content="Official Rolex Website - Swiss Luxury Watches" key="title" />
    <meta name="keywords" content="Official Rolex Website - Swiss Luxury Watches"></meta>
    <meta name="description" content="Official Rolex Website - Swiss Luxury Watches"></meta>
   </Head>
   <Header />
   <main className="w-full min-h-screen">{children}</main>
   <Footer />
  </>
 );
};
export default DefaultLayout;
