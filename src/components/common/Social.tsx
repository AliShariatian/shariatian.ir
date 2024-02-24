import { FC } from "react";
import { SocialType, footerSocials } from "@/utils/social";
import Image from "next/image";

type Props = {
   scale: number;
};
const Social: FC<Props> = ({ scale = 20 }): JSX.Element => {
   return (
      <>
         {footerSocials.map((social: SocialType) => (
            <a href={social.link} key={social.name} target="_blank" className="hover-scale opacity-90">
               <Image src={social.src} width={scale} height={scale} alt={`علی شریعتیان ${social.name}`} title={`My ${social.name}`} className="invert cursor-pointer" />
            </a>
         ))}
      </>
   );
};

export default Social;
