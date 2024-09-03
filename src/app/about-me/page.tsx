// TYPE
import type { Metadata } from "next";
import { FC } from "react";
// UTIL
import { aboutMePageTexts, metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import Image from "next/image";
import { Title, Skills, Projects, ShowWhenScroll, TextGenerate, CallToAction, Experience } from "@/components";
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
   title: `${metaTitle} درباره من`,
   description: "توسعه دهنده فرانت اند | برنامه نویس سایت | توسعه دهنده رابط کاربری | طراح سایت",
};

const AboutMePage: FC = async (): Promise<JSX.Element> => {
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

         <Skills />
         <Experience />
         <Projects />
         <CallToAction />
      </div>
   );
};

export default AboutMePage;
