import type { Metadata } from "next";
import { FC } from "react";

import Title from "@/components/sub/Title";
import { aboutMePageTexts, metaTitle } from "@/utils/persianTexts";
import ProjectCard from "@/components/sub/ProjectCart";
import Image from "next/image";
import Skills from "@/components/sub/Skills";
import { projects, ProjectType } from "@/utils/projects";

export const metadata: Metadata = {
   title: `${metaTitle} درباره من`,
   description: "توسعه دهنده فرانت اند | برنامه نویس سایت | توسعه دهنده رابط کاربری | طراح سایت",
};

const AboutMePage: FC = (): JSX.Element => {
   return (
      <div className="flex flex-col items-center justify-start pb-40">
         <main className="w-full text-center mb-28">
            <Title title={aboutMePageTexts.aboutMeTitle} />
         </main>

         <p className="px-9 xl:px-5 xl:w-1/2 text-slate-300 leading-8 text-justify">{aboutMePageTexts.aboutMe}</p>
         {/* Arrow */}
         <Image src="/img/curved-arrow.svg" alt="arrow" width={90} height={90} className="mt-9 invert opacity-70 scale-x-[-1] -rotate-[15deg]" />
         {/* Skills */}
         <section className="my-28">
            <Skills />
         </section>

         <section className="flex flex-col items-center justify-center">
            <h4 className="font-extrabold text-4xl my-28">{aboutMePageTexts.projects.projectsTitle}</h4>

            {/* Projects card */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-14 xl:gap-10 px-5 xl:px-20">
               {projects.map((item: ProjectType) => (
                  <ProjectCard key={item.liveLink} liveLink={item.liveLink} githubLink={item.githubLink} src={item.src} title={item.title} description={item.description} skills={item.skills} imgBgColor={item.imgBgColor} />
               ))}
            </div>
         </section>
      </div>
   );
};

export default AboutMePage;
