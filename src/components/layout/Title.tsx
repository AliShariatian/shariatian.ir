"use client";

import { FC } from "react";
import { motion } from "framer-motion";
// COMPONENT
import { TiltEffect } from "@/components";

type Props = {
   title: string;
   classNames?: string;
};

const Title: FC<Props> = ({ title, classNames }): JSX.Element => {
   return (
      <div className={`relative text-ellipsis text-center ${classNames}`}>
         <span className="absolute -top-3 right-0 -z-10 w-full select-none font-morabba text-4xl font-bold text-slate-900 opacity-80 xl:-top-9 xl:text-8xl">
            {title}
         </span>
         <motion.h2
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.8}
            className="mx-auto w-fit cursor-default font-morabba text-3xl font-extrabold xl:text-6xl"
         >
            <TiltEffect>{title}</TiltEffect>
         </motion.h2>
      </div>
   );
};

export default Title;
