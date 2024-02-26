// TYPES
import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
// FONT AND STYLE
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// COMPONENTS
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import PageTransition from "@/components/effects/PageTransition";
import PageLoadingProgressBar from "@/components/effects/PageLoadingProgressBar";
// TEXTS
import { metaTitle } from "@/utils/persianTexts";

// Heading font
const morabbaFont = localFont({ src: "../../public/font/Morabba-Medium.ttf", variable: "--font-morabba" });
// Code font
const jetBrainsFont = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetBrains" });
// Body font
const danaFont = localFont({
   src: [
      {
         path: "../../public/font/DanaFaNum-Light.ttf",
         weight: "300",
         style: "normal",
      },
      {
         path: "../../public/font/DanaFaNum-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../../public/font/DanaFaNum-Medium.ttf",
         weight: "500",
         style: "normal",
      },
      {
         path: "../../public/font/DanaFaNum-DemiBold.ttf",
         weight: "600",
         style: "normal",
      },
      {
         path: "../../public/font/DanaFaNum-Bold.ttf",
         weight: "700",
         style: "normal",
      },
   ],
   variable: "--font-dana",
});

export const metadata: Metadata = {
   title: `${metaTitle} توسعه‌دهنده فرانت‌اند`,
   description: "توسعه دهنده فرانت اند | برنامه نویس سایت | توسعه دهنده رابط کاربری | طراح سایت",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="fa" dir="rtl" className="h-full">
         <body
            className={`${danaFont.variable} ${morabbaFont.variable} ${jetBrainsFont.variable} relative bgDotPattern font-dana h-full overflow-x-hidden bg-slate-950 text-slate-100 transition-all ease-in duration-200`}
         >
            <PageLoadingProgressBar />

            <div className="h-full flex flex-col justify-between">
               <Navbar />
               <PageTransition>{children}</PageTransition>
               <Footer />
            </div>
         </body>
      </html>
   );
};

export default RootLayout;
