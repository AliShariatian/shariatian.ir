"use client";

// TYPE
import { FC } from "react";
// UTIL
import { HomePageTexts } from "@/public/data/persianTexts";
// COMPONENT
import { motion } from "framer-motion";
import { TiltEffect } from "@/components";
// -------------------------------------------

const HomePage: FC = (): JSX.Element => {
   return (
      <div className="mt-20 flex flex-col items-center justify-center xl:mt-9">
         {/* MAIN */}
         <main className="w-full text-center">
            <div className="relative text-ellipsis text-center">
               <span className="absolute -top-3 right-0 -z-10 w-full select-none font-morabba text-4xl font-bold text-slate-900 opacity-80 xl:-top-9 xl:text-9xl">
                  {HomePageTexts.aliShariatian}
               </span>

               <motion.h1
                  drag
                  dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                  dragElastic={0.8}
                  className="mx-auto w-fit cursor-default font-morabba text-3xl font-extrabold xl:text-8xl"
               >
                  <TiltEffect>{HomePageTexts.aliShariatian}</TiltEffect>
               </motion.h1>
            </div>

            <motion.p
               drag
               dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
               dragElastic={0.8}
               className="mt-9 cursor-default px-5 font-dana text-base font-light text-slate-300 opacity-[0.7] xl:mt-12 xl:px-0 xl:text-lg"
            >
               {HomePageTexts.description}
            </motion.p>

            {/* Gradient line */}
            <div className="relative -z-10 mx-auto mt-1 opacity-30 *:mx-auto">
               <div className="absolute inset-x-20 top-0 h-[2px] w-1/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
               <div className="absolute inset-x-20 top-0 h-px w-2/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
               <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
               <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            </div>
         </main>
      </div>
   );
};

export default HomePage;
