"use client";

import { FC, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils";

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
            duration: 2,
            delay: stagger(delay),
         },
      );
   }, [animate, delay]);

   return (
      <motion.p ref={scope} className={cn("text-justify leading-8 text-slate-300", className)}>
         {wordsArray.map((item, index) => {
            return (
               <motion.span key={item + index} className="opacity-0">
                  {/* Dont remove {" "} in bellow code */}
                  {item}{" "}
               </motion.span>
            );
         })}
      </motion.p>
   );
};

export default TextGenerate;
