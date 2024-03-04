"use client";

import { FC, PropsWithChildren } from "react";
import { useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const FrozenRouter: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   const context = useContext(LayoutRouterContext ?? {});
   const frozen = useRef(context).current;

   if (!frozen) {
      return <>{children}</>;
   }

   return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>;
};

const variants = {
   // hidden
   initial: { opacity: 0 },
   // enter
   animate: {
      opacity: 1,
   },
   // exit
   exit: { opacity: 0 },
};

type PageTransitionEffectPropsType = {
   children: React.ReactNode;
   className?: string;
};

const PageTransitionEffect: FC<PageTransitionEffectPropsType> = ({ children, className }): JSX.Element => {
   // The `key` is tied to the url using the `usePathname` hook.
   const key = usePathname();

   return (
      <AnimatePresence mode="wait">
         <motion.div key={key} initial="initial" animate="animate" exit="exit" variants={variants} transition={{ type: "linear" }} className={className}>
            <FrozenRouter>{children}</FrozenRouter>
         </motion.div>
      </AnimatePresence>
   );
};

export default PageTransitionEffect;
