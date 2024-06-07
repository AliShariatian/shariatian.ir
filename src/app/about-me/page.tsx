// TYPE
import type { Metadata } from "next";
import { FC } from "react";
// UTIL
import { projects, ProjectType } from "@/public/data/projects";
import { aboutMePageTexts, metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import Link from "next/link";
import Image from "next/image";
import { Title, Skills, ProjectCard, ShowWhenScroll, TextGenerate, ShimmerButton } from "@/components";
// ---------------------------------------------------------------------------

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

         <TextGenerate words={aboutMePageTexts.aboutMe} className="mx-auto px-9 xl:w-1/2 xl:px-5" />

         {/* Arrow */}
         <ShowWhenScroll>
            <Image
               src="/img/curved-arrow.svg"
               alt="arrow"
               width={90}
               height={90}
               className="mt-9 -rotate-[15deg] scale-x-[-1] opacity-50 invert"
            />
         </ShowWhenScroll>

         {/* Skills */}
         <section className="mb-64 mt-52 flex w-full flex-col items-center justify-center">
            <ShowWhenScroll className="mb-20">
               <h4 className="text-4xl font-extrabold">{aboutMePageTexts.projects.mainSkillsTitle}</h4>
            </ShowWhenScroll>

            <ShowWhenScroll>
               <Skills />
            </ShowWhenScroll>
         </section>

         {/* Projects */}
         <section className="flex flex-col items-center justify-center">
            <ShowWhenScroll className="mb-24">
               <h4 className="text-4xl font-extrabold">{aboutMePageTexts.projects.projectsTitle}</h4>
            </ShowWhenScroll>

            <ShowWhenScroll className="grid grid-cols-1 gap-14 px-5 xl:grid-cols-3 xl:gap-10 xl:px-20">
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
            </ShowWhenScroll>
         </section>

         {/* Contact with me */}
         <section className="mb-0 w-full xl:mb-52">
            <ShowWhenScroll className="mx-auto mb-28 mt-60 text-center">
               <h4 className="text-4xl font-extrabold">{aboutMePageTexts.contactWithMeTitle}</h4>
            </ShowWhenScroll>

            <ShowWhenScroll className="relative mx-auto flex flex-col items-center justify-center gap-24 xl:w-1/2">
               <Link href="Ali Shariatian - Resume.pdf" target="_blank" className="z-40">
                  <ShimmerButton text={aboutMePageTexts.downloadMyResume} />
               </Link>

               <div className="blurCircle absolute top-32 z-0 mx-auto" />

               <div className="z-40 flex flex-col justify-center gap-20 *:flex *:flex-col *:items-center *:justify-center *:gap-7 xl:flex-row xl:gap-32">
                  <div>
                     <p className="text-xl font-bold">📧 به من ایمیل بده</p>
                     <a href="mailto:shariatian92@gmail.com" className="text-lg hover:underline">
                        Shariatian92@gmail.com
                     </a>
                  </div>

                  <div>
                     <p className="text-xl font-bold">📞 با یک تماس شروع کن</p>
                     <a dir="ltr" href="tel:+4733378901" className="text-lg hover:underline">
                        0911 496 2339
                     </a>
                  </div>
               </div>
            </ShowWhenScroll>
         </section>
      </div>
   );
};

export default AboutMePage;
