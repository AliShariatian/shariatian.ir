import { FC } from "react";
import Image from "next/image";

type Props = {
   scale: number;
};

type Social = {
   name: string;
   src: string;
   link: string;
};

type SocialTypes = Social[];

const Social: FC<Props> = ({ scale = 20 }): JSX.Element => {
   const socials: SocialTypes = [
      {
         name: "Linkedin",
         src: "/img/social/linkedin.svg",
         link: "https://linkedin.com/in/AliShariatian",
      },
      {
         name: "X",
         src: "/img/social/x.svg",
         link: "https://twitter.com/Ali_Shariatian",
      },
      {
         name: "Github",
         src: "/img/social/github.svg",
         link: "https://github.com/AliShariatian",
      },
      {
         name: "CodePen",
         src: "/img/social/codepen.svg",
         link: "https://codepen.io/AliShariatian",
      },
      {
         name: "WakaTime",
         src: "/img/social/wakatime.svg",
         link: "https://wakatime.com/@alishariatian",
      },
   ];

   return (
      <>
         {socials.map((social: Social) => (
            <a href={social.link} key={social.name} target="_blank" className="hover-scale opacity-90">
               <Image src={social.src} width={scale} height={scale} alt={`علی شریعتیان ${social.name}`} title={`My ${social.name}`} className="invert cursor-pointer" />
            </a>
         ))}
      </>
   );
};

export default Social;
