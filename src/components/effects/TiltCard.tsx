"use client";

import { FC, PropsWithChildren, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   const ref = useRef<HTMLDivElement | null>(null);

   const [rotateX, setRotateX] = useState<number>(0);
   const [rotateY, setRotateY] = useState<number>(0);

   const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = (ev.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (ev.clientY - rect.top) * ROTATION_RANGE;

      const rY = mouseX / width - HALF_ROTATION_RANGE;
      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

      setRotateX(rX);
      setRotateY(rY);
   };

   const handleMouseLeave = () => {
      if (!ref.current) return;
      setRotateX(0);
      setRotateY(0);
   };

   return (
      <motion.div
         ref={ref}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{
            transformStyle: "preserve-3d",
         }}
         animate={{
            rotateX,
            rotateY,
         }}
      >
         <div
            style={{
               transform: "translateZ(75px)",
               transformStyle: "preserve-3d",
            }}
         >
            {children}
         </div>
      </motion.div>
   );
};

export default TiltCard;
