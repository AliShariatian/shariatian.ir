"use client";

import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = {
   margin?: number;
};

const FadeInWhenVisible: FC<PropsWithChildren<Props>> = ({ children, margin = 0 }) => {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, margin: `${margin}px` }}
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
