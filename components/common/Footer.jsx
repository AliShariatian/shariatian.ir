"use client";

import { motion } from "framer-motion";
import Social from "./Social";
import { social } from "@/utils/persianTexts";

const Footer = () => {
   return (
      <footer>
         <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.8}
            className="absolute left-9 bottom-9 text-sm cursor-default flex gap-3 items-center opacity-50 hover:opacity-100 transition-opacity"
         >
            <div className="flex flex-row-reverse gap-3 items-baseline">
               <Social scale={24} />
            </div>
            <span className="font-dana font-thin mb-1 select-none">________</span>
            <p className="select-none">{social}</p>
         </motion.div>
      </footer>
   );
};

export default Footer;
