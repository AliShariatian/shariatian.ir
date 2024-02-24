"use client";

import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const FadeInWhenVisible: FC<PropsWithChildren> = ({ children }) => {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false }}
         transition={{ duration: 0.5 }}
         variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
         }}
      >
         {children}
      </motion.div>
   );
};

export default FadeInWhenVisible;
