"use client";

import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = {
   className?: string;
   amount?: number;
};

const ShowWhenScroll: FC<PropsWithChildren<Props>> = ({ children, className, amount = 0 }) => {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: amount }}
         transition={{
            type: "spring",
            damping: 5,
            mass: 0.5,
            stiffness: 150,
         }}
         variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
         }}
         className={className}
      >
         {children}
      </motion.div>
   );
};

export default ShowWhenScroll;
