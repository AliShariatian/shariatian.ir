"use client";

import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
   title: string;
   classNames?: string;
};

const Title: FC<Props> = ({ title, classNames }): JSX.Element => {
   return (
      <div className={`relative text-ellipsis text-center ${classNames}`}>
         <span className="absolute right-0 -top-3 xl:-top-9 -z-10 w-full text-slate-900 opacity-80 select-none font-morabba text-4xl xl:text-8xl font-bold">{title}</span>
         <motion.h2 drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.8} className="font-morabba text-3xl xl:text-6xl font-extrabold cursor-default">
            {title}
         </motion.h2>
      </div>
   );
};

export default Title;
