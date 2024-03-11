"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const variants = (firstXPosition: number) => {
   return {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: firstXPosition },
   };
};

const Lamp: FC = (): JSX.Element => {
   return (
      <div className="-z-10 opacity-40 max-xl:hidden">
         {/* Right */}
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            variants={variants(99)}
            className="absolute -right-[50%] top-0 -z-10 -translate-y-1/3"
         >
            <div className="lampContainer flex w-screen rotate-90">
               <div className="lamp translate-z-0 translate-y-[-180px] rotate-180 scale-[3] animate-none duration-1000 md:scale-[2] 2xl:scale-[1.55]"></div>
            </div>
         </motion.div>

         {/* Left */}
         <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            variants={variants(-99)}
            className="absolute -left-[50%] top-0 -z-10 -translate-y-1/3"
         >
            <div className="lampContainer flex w-screen -rotate-90">
               <div className="lamp translate-z-0 translate-y-[-180px] rotate-180 scale-[3] animate-none duration-1000 md:scale-[2] 2xl:scale-[1.55]"></div>
            </div>
         </motion.div>
      </div>
   );
};

export default Lamp;
