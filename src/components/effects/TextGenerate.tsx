"use client";

import { FC, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

type PropsType = {
  words: string;
  delay?: number;
  className?: string;
};

const TextGenerate: FC<PropsType> = ({ words, className, delay = 0.2 }): JSX.Element => {
  const [scopeRef, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(delay),
      },
    );
  }, [animate, delay]);

  return (
    <motion.p ref={scopeRef} className={className}>
      {wordsArray.map((item, index) => {
        return (
          <motion.span key={item + index} className="opacity-0">
            {/* Dont remove {" "} in bellow code */}
            {item}{" "}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export default TextGenerate;
