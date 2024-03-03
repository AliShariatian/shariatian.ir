import type { Metadata } from "next";
import { FC } from "react";

import Image from "next/image";
import Title from "@/components/sub/Title";
import Skills from "@/components/sub/Skills";
import ProjectCard from "@/components/sub/ProjectCart";
import ShowWhenScroll from "@/components/effects/ShowWhenScroll";

import { aboutMePageTexts, metaTitle } from "@/utils/persianTexts";
import { projects, ProjectType } from "@/utils/projects";

export const metadata: Metadata = {
   title: `${metaTitle} درباره من`,
   description: "توسعه دهنده فرانت اند | برنامه نویس سایت | توسعه دهنده رابط کاربری | طراح سایت",
};

const AboutMePage: FC = (): JSX.Element => {
   return (
      <div className="flex flex-col items-center justify-start pb-40">
         <main className="mb-28 w-full text-center">
            <Title title={aboutMePageTexts.aboutMeTitle} />
         </main>

         <ShowWhenScroll>
            <p className="mx-auto px-9 text-justify leading-8 text-slate-300 xl:w-1/2 xl:px-5">{aboutMePageTexts.aboutMe}</p>
         </ShowWhenScroll>

         {/* Arrow */}
         <ShowWhenScroll>
            <Image src="/img/curved-arrow.svg" alt="arrow" width={90} height={90} className="mt-9 -rotate-[15deg] scale-x-[-1] opacity-70 invert" />
         </ShowWhenScroll>

         {/* Skills */}
         <section className="mt-52 mb-64 flex flex-col items-center justify-center">
            <div className="mb-20">
               <ShowWhenScroll>
                  <h4 className="text-4xl font-extrabold">{aboutMePageTexts.projects.mainSkillsTitle}</h4>
               </ShowWhenScroll>
            </div>
            <ShowWhenScroll>
               <Skills />
            </ShowWhenScroll>
         </section>

         {/* Projects */}
         <section className="flex flex-col items-center justify-center">
            <div className="mb-28">
               <ShowWhenScroll>
                  <h4 className="text-4xl font-extrabold">{aboutMePageTexts.projects.projectsTitle}</h4>
               </ShowWhenScroll>
            </div>

            <div className="grid grid-cols-1 gap-14 px-5 xl:grid-cols-3 xl:gap-10 xl:px-20">
               {projects.map((item: ProjectType) => (
                  <ProjectCard
                     key={item.liveLink}
                     liveLink={item.liveLink}
                     githubLink={item.githubLink}
                     src={item.src}
                     title={item.title}
                     description={item.description}
                     skills={item.skills}
                     imgBgColor={item.imgBgColor}
                  />
               ))}
            </div>
         </section>
      </div>
   );
};

export default AboutMePage;
