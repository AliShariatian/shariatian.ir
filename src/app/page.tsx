"use client";

import { FC } from "react";

import { motion } from "framer-motion";
import { HomePageTexts } from "@/utils/persianTexts";

const HomePage: FC = (): JSX.Element => {
   return (
      <div className="flex flex-col items-center justify-center mt-20 xl:mt-9">
         {/* MAIN */}
         <main className="w-full text-center">
            <div className="relative text-ellipsis text-center">
               <span className="absolute right-0 -top-3 xl:-top-9 -z-10 w-full text-slate-900 opacity-80 select-none font-morabba text-4xl xl:text-9xl font-bold">{HomePageTexts.aliShariatian}</span>
               <motion.h2 drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.8} className="font-morabba text-3xl xl:text-8xl font-extrabold cursor-default">
                  {HomePageTexts.aliShariatian}
               </motion.h2>
            </div>
            <motion.h1
               drag
               dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
               dragElastic={0.8}
               className="cursor-default text-base px-5 xl:px-0 xl:text-lg mt-9 xl:mt-12 font-dana font-light text-slate-300 opacity-[0.7]"
            >
               {HomePageTexts.description}
            </motion.h1>
         </main>
      </div>
   );
};

export default HomePage;
