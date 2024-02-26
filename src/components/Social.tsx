import { FC } from "react";
import { SocialType } from "@/utils/social";
import Image from "next/image";

type Props = {
   scale?: number;
   data: SocialType[];
};
const Social: FC<Props> = ({ scale = 20, data }): JSX.Element => {
   return (
      <>
         {data.map((social: SocialType) => (
            <a href={social.link} key={social.name} target="_blank" className="hover-scale opacity-90">
               <Image src={social.src} width={scale} height={scale} alt={`علی شریعتیان ${social.name}`} title={`My ${social.name}`} className="invert cursor-pointer" />
            </a>
         ))}
      </>
   );
};

export default Social;