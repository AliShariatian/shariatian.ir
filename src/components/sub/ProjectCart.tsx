import { FC } from "react";
import Image from "next/image";
import { aboutMePageTexts } from "@/utils/persianTexts";
import A from "./A/A";

type Props = {
   src: string;
   liveLink: string;
   githubLink: string;
   title: string;
   description: string;
   skills: string[];
   imgBgColor?: string;
};

const ProjectCard: FC<Props> = ({ src, liveLink, githubLink, title, description, skills, imgBgColor = "bg-blue-200" }): JSX.Element => {
   return (
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-900 group/img shadow-md">
         {/* Image */}
         <A href={liveLink} target="_blank" className="relative">
            <div className={`${imgBgColor} p-9 rounded-2xl overflow-hidden`}>
               <Image src={src} width={500} height={500} alt={title} className="w-full rounded-md shadow-xl object-contain transition duration-400 ease-out group-hover/img:scale-110" />
            </div>
            <div title="رفتن به پروژه" className="absolute left-0 top-0 size-full flex items-center justify-center bg-slate-950/70 transition duration-400 ease-out group-hover/img:opacity-0">
               <Image src="/img/external-link.svg" className="opacity-70" alt="Go to project icon" width={35} height={35} />
            </div>
         </A>

         {/* Content */}
         <div className="relative p-5 flex flex-col gap-3 mt-2">
            <div className="flex flex-wrap justify-between gap-2">
               <A href={liveLink} target="_blank" title="رفتن به پروژه" className="w-fit hover:opacity-90 transition-opacity">
                  <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
               </A>

               <div className="flex gap-1 opacity-0 group-hover/img:opacity-100 transition duration-400 ease-out">
                  {/* Live link */}
                  <A href={liveLink} target="_blank" title="رفتن به پروژه" className="w-fit">
                     <Image src="/img/social/web.svg" width={29} height={29} alt="رفتن به پروژه" className="invert cursor-pointer hover:opacity-90 transition-opacity" />
                  </A>
                  {/* Github link */}
                  <A href={githubLink} target="_blank" title="رفتن به گیتهاب پروژه" className="w-fit">
                     <Image src="/img/social/github.svg" width={29} height={29} alt="رفتن به گیتهاب پروژه" className="invert cursor-pointer hover:opacity-90 transition-opacity" />
                  </A>
               </div>
            </div>
            <p className="text-slate-300">{description}</p>

            <hr className="my-2 border-slate-900" />

            <span className="text-slate-300 -mb-3">{aboutMePageTexts.projects.skillUsed}:</span>
            {/* Tools */}
            <div dir="ltr" className="flex flex-wrap gap-x-2 gap-y-3 items-center my-4">
               {skills.map((tool) => (
                  <span key={tool} className="py-1 px-4 text-slate text-sm bg-slate-900 rounded-full">
                     {tool}
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
