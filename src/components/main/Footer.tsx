"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { footerSocials } from "@/utils/social";
import { footerTexts } from "@/utils/persianTexts";
// COMPONENT
import { Social } from "@/components";

const Footer: FC = (): JSX.Element => {
   return (
      <footer className="flex items-center justify-end p-7">
         <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.8}
            className="flex w-fit cursor-default flex-col items-end justify-end text-sm opacity-50 transition-opacity hover:opacity-100 xl:flex-row xl:gap-3"
         >
            <div className="flex flex-col items-baseline gap-3 xl:flex-row-reverse">
               <Social data={footerSocials} scale={24} />
            </div>
            <span className="mb-1 hidden select-none font-dana font-thin xl:block">________</span>
            <p className="hidden select-none xl:block">{footerTexts.social}</p>
         </motion.div>
      </footer>
   );
};

export default Footer;
