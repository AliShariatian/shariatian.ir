"use client";

import { FC, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils";

type PropsType = {
   words: string;
   className?: string;
};

const TextGenerate: FC<PropsType> = ({ words, className }): JSX.Element => {
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
            delay: stagger(0.4),
         },
      );
   }, [animate]);

   return (
      <motion.p ref={scope} className={cn("text-justify leading-8 text-slate-300", className)}>
         {wordsArray.map((item, index) => {
            return (
               <motion.span key={item + index} className="opacity-0">
                  {item}{" "}
               </motion.span>
            );
         })}
      </motion.p>
   );
};

export default TextGenerate;
