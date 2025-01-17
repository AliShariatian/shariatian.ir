import { FC } from "react";
import Image from "next/image";
import ShowWhenScroll from "../effects/ShowWhenScroll";
import { aboutMePageTexts } from "@/public/data/persianTexts";
import { Frontend_skills, Frontend_skillType } from "@/public/data/skills";

const Skills: FC = (): JSX.Element => {
  const hoverScaleValue = { "--hover-scale-value": 1.125 } as React.CSSProperties;

  return (
    <section className="mb-64 mt-52 flex w-full flex-col items-center justify-center">
      <ShowWhenScroll className="mb-20">
        <h4 className="text-4xl font-extrabold">{aboutMePageTexts.projects.mainSkillsTitle}</h4>
      </ShowWhenScroll>

      <ShowWhenScroll>
        <div
          dir="ltr"
          className="relative z-20 flex h-full flex-col items-center justify-center gap-3 overflow-hidden"
          style={{ transform: "scale(0.9)" }}
        >
          {/* skills */}
          <div className="flex flex-wrap items-center justify-around gap-4 xl:gap-5">
            {Frontend_skills.map((skill: Frontend_skillType) => (
              <Image
                style={hoverScaleValue}
                className="hover-scale"
                alt={skill.skill_name}
                key={skill.image}
                src={skill.image}
                width={skill.width}
                height={skill.height}
                title={skill.skill_name}
              />
            ))}
          </div>
        </div>
      </ShowWhenScroll>
    </section>
  );
};

export default Skills;
