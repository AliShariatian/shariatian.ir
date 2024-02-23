"use client";

import { motion } from "framer-motion";

const Title = ({ title = "عنوان", tagName = "div", classNames = "" }) => {
   const CustomTag = `${tagName}`;

   return (
      <CustomTag className={`relative text-ellipsis text-center ${classNames}`}>
         <span className="absolute right-0 -top-8 -z-10 w-full text-slate-900 opacity-80 select-none font-morabba text-7xl font-bold">{title}</span>
         <motion.h2 drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} dragElastic={0.8} className="font-morabba text-6xl font-extrabold cursor-default">
            {title}
         </motion.h2>
      </CustomTag>
   );
};

export default Title;
