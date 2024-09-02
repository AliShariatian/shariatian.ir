"use client";

import { FC, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils";
import Image from "next/image";
import ChatGPT from "@/public/img/chatgpt.svg";

type PropsType = {
   words: string;
   delay?: number;
   className?: string;
};

const TextGenerate: FC<PropsType> = ({ words, delay = 0.2, className }): JSX.Element => {
   const [scope, animate] = useAnimate();
   const wordsArray = words.split(" ");

   useEffect(() => {
      animate(
         "span",
         {
            opacity: 1,
         },
         {
            duration: 1,
            delay: stagger(delay),
         },
      );
   }, [animate, delay]);

   return (
      <section className={cn("text-justify leading-8 text-slate-300", className)}>
         <div className="flex grow items-center gap-3 rounded-full border-2 border-slate-800 bg-slate-900 py-2 pl-0 pr-5 xl:w-fit xl:py-3 xl:pl-20">
            <Image src={ChatGPT} alt="ChatGPT" className="size-5 opacity-60 invert xl:size-6" />
            <p className="text-slate-300">بگو علی شریعتیان کیه؟</p>
         </div>

         <motion.p ref={scope} className="mt-6 xl:mt-8">
            {wordsArray.map((item, index) => {
               return (
                  <motion.span key={item + index} className="opacity-0">
                     {/* Dont remove {" "} in bellow code */}
                     {item}{" "}
                  </motion.span>
               );
            })}
         </motion.p>
      </section>
   );
};

export default TextGenerate;
