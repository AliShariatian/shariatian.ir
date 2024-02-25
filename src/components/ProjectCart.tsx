import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutMePageTexts } from "@/utils/persianTexts";

interface Props {
   src: string;
   link: string;
   title: string;
   description: string;
   skills: string[];
   imgBgColor?: string;
}

const ProjectCard: FC<Props> = ({ src, link, title, description, skills, imgBgColor = "bg-blue-200" }): JSX.Element => {
   return (
      <div className="relative overflow-hidden rounded-2xl border border-slate-900 group/img shadow-md">
         {/* Image */}
         <Link href={link} target="_blank" className="relative">
            <div className={`${imgBgColor} p-9 rounded-2xl overflow-hidden`}>
               <Image src={src} width={500} height={500} alt={title} className="w-full rounded-md shadow-xl object-contain transition duration-400 ease-out group-hover/img:scale-110" />
            </div>
            <div title="رفتن به پروژه" className="absolute left-0 top-0 size-full flex items-center justify-center bg-slate-950/70 transition duration-400 ease-out group-hover/img:opacity-0">
               <Image src="/img/external-link.svg" className="opacity-70" alt="go to project icon" width={35} height={35} />
            </div>
         </Link>

         {/* Content */}
         <div className="relative p-5 flex flex-col gap-3">
            <Link href={link} target="_blank" title="رفتن به پروژه" className="w-fit">
               <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
            </Link>
            <p className="text-slate-300">{description}</p>

            <hr className="my-3 border-slate-900" />

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
