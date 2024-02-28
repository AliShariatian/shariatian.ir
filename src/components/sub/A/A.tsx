// Custom Link Component

import { FC } from "react";
import { Props } from "./A.type";
import Link from "next/link";
import TiltEffect from "@/components/effects/TiltCard";

const A: FC<Props> = ({ children, href, className, title, haveAnimation, scrollAfterClick = false, target, RotationRange }): JSX.Element => {
   return haveAnimation ? (
      <Link href={href} title={title} scroll={scrollAfterClick} target={target}>
         <TiltEffect className={className} RotationRange={RotationRange}>
            {children}
         </TiltEffect>
      </Link>
   ) : (
      <Link href={href} title={title} scroll={scrollAfterClick} className={className} target={target}>
         {children}
      </Link>
   );
};

export default A;
