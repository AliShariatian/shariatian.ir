"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { footerTexts } from "@/utils/persianTexts";
import Social from "./Social";
import { footerSocials } from "@/utils/social";

const Footer: FC = (): JSX.Element => {
   return (
      <footer className="p-7">
         <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.8}
            className="text-sm cursor-default flex flex-col xl:flex-row xl:gap-3 items-end justify-end opacity-50 hover:opacity-100 transition-opacity"
         >
            <div className="flex xl:flex-row-reverse flex-col gap-3 items-baseline">
               <Social data={footerSocials} scale={24} />
            </div>
            <span className="hidden xl:block font-dana font-thin mb-1 select-none">________</span>
            <p className="hidden xl:block select-none">{footerTexts.social}</p>
         </motion.div>
      </footer>
   );
};

export default Footer;
