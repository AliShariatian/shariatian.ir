"use client";

import { cn } from "@/utils";
import { CSSProperties, FC, PropsWithChildren } from "react";
import Tilt, { TiltProps } from "react-parallax-tilt";

interface IProps extends TiltProps {
   className?: string;
   style?: CSSProperties;
}

const TiltEffect: FC<PropsWithChildren<IProps>> = ({
   children,
   tiltMaxAngleX = 10,
   tiltMaxAngleY = 10,
   className,
   style,
   ...props
}): JSX.Element => {
   return (
      <div className={cn(className)}>
         <Tilt style={style} tiltMaxAngleX={tiltMaxAngleX} tiltMaxAngleY={tiltMaxAngleY} {...props}>
            {children}
         </Tilt>
      </div>
   );
};

export default TiltEffect;
