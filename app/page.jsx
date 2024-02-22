"use client";

import { motion } from "framer-motion";
import Social from "@/components/Social";

const aliShariatian = "عــلــی شـــریـعـتـیـان";
const description = "توسعه‌دهنده رابط‌ کاربری وبسایت‌های زیبا و دوست‌داشتنی برای خدمات ارزشمند شما";
const social = "شـبـکـه‌هـای اجـتـمـاعـی";

const HomePage = () => {
   return (
      <motion.div
         initial={{ y: 100, opacity: 0 }}
         animate={{
            y: 0,
            opacity: 1,
            transition: {
               duration: 0.8,
               delay: 0,
               type: "spring",
               stiffness: 200,
            },
         }}
         className="relative min-h-screen flex flex-col items-center justify-center h-full"
      >
         <nav></nav>
         <main className="w-full -mt-40 text-center">
            <div className="relative text-ellipsis text-center">
               <span className="absolute right-0 -top-8 -z-10 w-full text-slate-900 opacity-80 select-none font-morabba text-9xl font-bold">{aliShariatian}</span>
               <motion.h2 drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.8} className="font-morabba text-8xl font-extrabold cursor-default">
                  {aliShariatian}
               </motion.h2>
            </div>
            <motion.h1 drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.8} className="cursor-default text-lg mt-12 font-dana font-light text-slate-300 opacity-[0.7]">
               {description}
            </motion.h1>
         </main>

         <footer>
            <motion.div
               drag
               dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
               dragElastic={0.8}
               className="absolute left-9 bottom-9 text-sm cursor-move flex gap-3 items-center opacity-50 hover:opacity-100 transition-opacity"
            >
               <div className="flex flex-row-reverse gap-3 items-baseline">
                  <Social scale={24} />
               </div>
               <span className="font-dana font-thin mb-1 select-none">________</span>
               <p className="select-none">{social}</p>
            </motion.div>
         </footer>
      </motion.div>
   );
};

export default HomePage;
