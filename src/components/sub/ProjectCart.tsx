import { FC } from "react";

import Image from "next/image";
import { aboutMePageTexts } from "@/data/persianTexts";
// COMPONENT
import { A, ShowWhenScroll } from "@/components";

type Props = {
   src: string;
   liveLink: string;
   githubLink: string;
   title: string;
   description: string;
   skills: string[];
   imgBgColor?: string;
};

const ProjectCard: FC<Props> = ({
   src,
   liveLink,
   githubLink,
   title,
   description,
   skills,
   imgBgColor = "bg-blue-200",
}): JSX.Element => {
   return (
      <div className="group/img relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-950 shadow-md">
         {/* Image */}
         <A href={liveLink} target="_blank" className="relative">
            <div className={`${imgBgColor} overflow-hidden rounded-2xl p-9`}>
               <Image
                  src={src}
                  width={500}
                  height={500}
                  alt={title}
                  className="duration-400 w-full rounded-md object-contain shadow-xl transition ease-out group-hover/img:scale-110"
               />
            </div>
            <div
               title="رفتن به پروژه"
               className="duration-400 absolute left-1/2 top-0 flex h-full w-[105%] -translate-x-1/2 items-center justify-center rounded-2xl bg-slate-950/70 transition ease-out group-hover/img:opacity-0"
            >
               <Image src="/img/external-link.svg" className="opacity-70" alt="Go to project" width={35} height={35} />
            </div>
         </A>

         {/* Content */}
         <div className="relative mt-2 flex flex-col gap-3 p-5">
            <div className="flex flex-wrap justify-between gap-2">
               <A href={liveLink} target="_blank" title="رفتن به پروژه" className="w-fit transition-opacity hover:opacity-90">
                  <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
               </A>

               <div className="duration-400 flex gap-1 opacity-0 transition ease-out group-hover/img:opacity-100">
                  {/* Live link */}
                  <A href={liveLink} target="_blank" title="رفتن به پروژه" className="w-fit">
                     <Image
                        src="/img/social/web.svg"
                        width={29}
                        height={29}
                        alt="رفتن به پروژه"
                        className="cursor-pointer invert transition-opacity hover:opacity-90"
                     />
                  </A>
                  {/* Github link */}
                  <A href={githubLink} target="_blank" title="رفتن به گیتهاب پروژه" className="w-fit">
                     <Image
                        src="/img/social/github.svg"
                        width={29}
                        height={29}
                        alt="رفتن به گیتهاب پروژه"
                        className="cursor-pointer invert transition-opacity hover:opacity-90"
                     />
                  </A>
               </div>
            </div>
            <p className="text-slate-300">{description}</p>

            <hr className="my-2 border-slate-900" />

            <span className="-mb-3 text-slate-300">{aboutMePageTexts.projects.skillUsed}:</span>
            {/* Tools */}
            <div dir="ltr" className="my-4 flex flex-wrap items-center gap-x-2 gap-y-3">
               {skills.map((tool) => (
                  <span key={tool} className="text-slate rounded-full bg-slate-900 px-4 py-1 text-sm">
                     {tool}
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
