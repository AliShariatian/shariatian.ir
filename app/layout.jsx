import localFont from "next/font/local";
import PageTransition from "@/components/PageTransition";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// Heading font
const morabbaFont = localFont({ src: "../public/font/Morabba-Medium.ttf", variable: "--font-morabba" });
// Body font
const danaFont = localFont({
   src: [
      {
         path: "../public/font/DanaFaNum-Light.ttf",
         weight: "300",
         style: "normal",
         variable: "--font-dana",
      },
      {
         path: "../public/font/DanaFaNum-Regular.ttf",
         weight: "400",
         style: "normal",
         variable: "--font-dana",
      },
      {
         path: "../public/font/DanaFaNum-Medium.ttf",
         weight: "500",
         style: "normal",
         variable: "--font-dana",
      },
      {
         path: "../public/font/DanaFaNum-DemiBold.ttf",
         weight: "600",
         style: "normal",
         variable: "--font-dana",
      },
      {
         path: "../public/font/DanaFaNum-Bold.ttf",
         weight: "700",
         style: "normal",
         variable: "--font-dana",
      },
   ],
});

export const metadata = {
   title: "Ali Shariatian | Front-end Developer",
   description: "Ali Shariatian, a front-end developer blog",
};

const RootLayout = ({ children }) => {
   return (
      <html lang="fa" dir="rtl" className="h-full">
         <body className={`${danaFont.className} ${morabbaFont.variable} overflow-hidden h-full bg-slate-950 text-slate-100 transition-all ease-in duration-200`}>
            <Navbar />
            <PageTransition>
               {children}
               <Footer />
            </PageTransition>
         </body>
      </html>
   );
};

export default RootLayout;
