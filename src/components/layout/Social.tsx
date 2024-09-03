import { FC } from "react";
import Image from "next/image";
import { SocialType } from "@/public/data/social";
// COMPONENT
import Link from "next/link";

type Props = {
   scale?: number;
   data: SocialType[];
};
const Social: FC<Props> = ({ scale = 20, data }): JSX.Element => {
   return (
      <>
         {data.map((social: SocialType) => (
            <Link href={social.link} key={social.name} target="_blank" className="hover-scale opacity-90">
               <Image
                  src={social.src}
                  width={scale}
                  height={scale}
                  alt={`علی شریعتیان ${social.name}`}
                  title={`My ${social.name}`}
                  className="cursor-pointer invert"
               />
            </Link>
         ))}
      </>
   );
};

export default Social;
