"use client";

import { motion } from "framer-motion";
import { aliShariatian, description } from "@/utils/persianTexts";

const HomePage = () => {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center h-full">
         {/* MAIN */}
         <main className="w-full -mt-32 text-center">
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
      </div>
   );
};

export default HomePage;
