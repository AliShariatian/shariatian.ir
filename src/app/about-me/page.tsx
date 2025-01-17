import { FC } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { aboutMePageTexts } from "@/public/data/persianTexts";
import { Title, Skills, Projects, ShowWhenScroll, CallToAction, Experience, Biography } from "@/components";

export const metadata: Metadata = {
  title: "درباره من",
};

const AboutMePage: FC = async (): Promise<JSX.Element> => {
  return (
    <main className="flex flex-col items-center justify-start pb-40">
      <div className="mb-28 w-full text-center">
        <Title title={aboutMePageTexts.aboutMeTitle} />
      </div>

      <Biography />

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
    </main>
  );
};

export default AboutMePage;
