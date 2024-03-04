// TYPES
import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
// COMPONENTS
import { Navbar, Footer, PageTransition, PageLoadingProgressBar } from "@/components";
// FONT and STYLE
import { danaFont, jetBrainsFont, morabbaFont } from "@/utils/font";
import "./globals.css";
// TEXTS
import { metaTitle } from "@/utils/persianTexts";

export const metadata: Metadata = {
   title: `${metaTitle} توسعه‌دهنده فرانت‌اند`,
   description: "توسعه دهنده فرانت اند | برنامه نویس سایت | توسعه دهنده رابط کاربری | طراح سایت",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="fa" dir="rtl" className="h-full">
         <body
            className={`${danaFont.variable} ${morabbaFont.variable} ${jetBrainsFont.variable} bgDotPattern relative h-full overflow-x-hidden bg-slate-950 font-dana text-slate-100 transition-all duration-200 ease-in`}
         >
            <PageLoadingProgressBar />
            {/* In center of page gradient effect */}
            <div className="gradient absolute left-1/2 top-0 -z-[90] size-3/5 -translate-x-1/2 opacity-5" />

            <div className="flex h-full w-full flex-col justify-between">
               <Navbar />
               <PageTransition className="mt-32 xl:mt-40">{children}</PageTransition>
               <PageTransition>
                  <Footer />
               </PageTransition>
            </div>
         </body>
      </html>
   );
};

export default RootLayout;
