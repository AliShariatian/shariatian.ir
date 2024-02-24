import type { Metadata } from "next";
import { FC } from "react";

import Title from "@/components/common/Title";
import { aboutMePageTexts, metaTitle } from "@/utils/persianTexts";
import ProjectCard from "@/components/ProjectCart";
import Image from "next/image";
import FadeInWhenVisible from "@/components/common/FadeInWhenVisible";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
   title: `${metaTitle} درباره من`,
   description: "توسعه دهنده فرانت اند | برنامه نویس سایت | توسعه دهنده رابط کاربری | طراح سایت",
};

const AboutMePage: FC = (): JSX.Element => {
   return (
      <div className="flex flex-col items-center justify-start pb-40">
         <main className="w-full text-center mb-32">
            <Title title={aboutMePageTexts.aboutMeTitle} />
         </main>

         <p className="px-9 xl:px-5 xl:w-1/2 text-slate-300 leading-8 text-justify">{aboutMePageTexts.aboutMe}</p>
         {/* Arrow */}
         <Image src="/img/curved-arrow.svg" alt="arrow" width={90} height={90} className="mt-9 invert opacity-70 scale-x-[-1] -rotate-[15deg]" />
         {/* Skills */}
         <section className="my-20 ">
            <FadeInWhenVisible>
               <Skills />
            </FadeInWhenVisible>
         </section>

         <section className="flex flex-col items-center justify-center">
            <FadeInWhenVisible>
               <h4 className="font-extrabold text-4xl mt-48 mb-28">{aboutMePageTexts.projects.projectsTitle}</h4>
            </FadeInWhenVisible>

            <FadeInWhenVisible margin={150}>
               {/* Projects card */}
               <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 px-5 xl:px-20">
                  <ProjectCard
                     link="galaxy.shariatian.ir"
                     src="/img/projects/galaxy.webp"
                     title="لندینگ پیج گلکسی"
                     description="پروژه تک‌صفحه‌ای لندینگ پیج برای نمایش نمونه‌کارها"
                     skills={["React JS", "Next JS", "Tailwind CSS", "Framer Motion"]}
                  />
                  <ProjectCard
                     link="medium.shariatian.ir"
                     src="/img/projects/medium.webp"
                     title="کلون سایت Medium"
                     description="پروژه مشابه‌سازی سایت وبلاگ‌نویسی Medium"
                     skills={["React JS", "Context API", "Axios", "EditorJS", "Lodash", "Tailwind CSS", "Framer Motion"]}
                  />
               </div>
            </FadeInWhenVisible>
         </section>
      </div>
   );
};

export default AboutMePage;
