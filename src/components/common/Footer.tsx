"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { social } from "@/utils/persianTexts";
import Social from "./Social";

const Footer: FC = (): JSX.Element => {
   return (
      <footer>
         <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.8}
            className="absolute left-7 bottom-7 xl:left-9 xl:bottom-9 text-sm cursor-default flex flex-col xl:flex-row xl:gap-3 items-center opacity-50 hover:opacity-100 transition-opacity"
         >
            <div className="flex xl:flex-row-reverse flex-col-reverse gap-3 items-baseline">
               <Social scale={24} />
            </div>
            <span className="hidden xl:block font-dana font-thin mb-1 select-none">________</span>
            <p className="hidden xl:block select-none">{social}</p>
         </motion.div>
      </footer>
   );
};

export default Footer;
