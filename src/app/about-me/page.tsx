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
         <main className="mb-28 w-full text-center">
            <Title title={aboutMePageTexts.aboutMeTitle} />
         </main>

         <p className="px-9 text-justify leading-8 text-slate-300 xl:w-1/2 xl:px-5">{aboutMePageTexts.aboutMe}</p>
         {/* Arrow */}
         <Image src="/img/curved-arrow.svg" alt="arrow" width={90} height={90} className="mt-9 -rotate-[15deg] scale-x-[-1] opacity-70 invert" />
         {/* Skills */}
         <section className="my-28">
            <Skills />
         </section>

         <section className="flex flex-col items-center justify-center">
            <h4 className="my-28 text-4xl font-extrabold">{aboutMePageTexts.projects.projectsTitle}</h4>

            {/* Projects card */}
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
