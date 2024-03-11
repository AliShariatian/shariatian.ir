import { FC } from "react";
import Image from "next/image";
import { Frontend_skills, Frontend_skillType } from "@/public/data/skills";

const Skills: FC = (): JSX.Element => {
   const hoverScaleValue = { "--hover-scale-value": 1.125 } as React.CSSProperties;

   return (
      <section
         dir="ltr"
         className="relative z-20 flex h-full flex-col items-center justify-center gap-3 overflow-hidden"
         style={{ transform: "scale(0.9)" }}
      >
         {/* skills */}
         <div className="flex flex-wrap items-center justify-around gap-4 xl:gap-5">
            {Frontend_skills.map((skill: Frontend_skillType) => (
               <Image
                  style={hoverScaleValue}
                  className="hover-scale "
                  alt={skill.skill_name}
                  key={skill.image}
                  src={skill.image}
                  width={skill.width}
                  height={skill.height}
                  title={skill.skill_name}
               />
            ))}
         </div>
      </section>
   );
};

export default Skills;
