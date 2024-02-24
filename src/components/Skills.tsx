import { Frontend_skills, Frontend_skillType } from "@/utils/skills";
import Image from "next/image";

function Skills() {
   return (
      <section dir="ltr" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-20" style={{ transform: "scale(0.9)" }}>
         {/* skills */}
         <div className="flex items-center justify-around flex-wrap mt-4 gap-5">
            {Frontend_skills.map((skill: Frontend_skillType) => (
               <Image alt={skill.skill_name} key={skill.image} src={skill.image} width={skill.width} height={skill.height} title={skill.skill_name} />
            ))}
         </div>
      </section>
   );
}

export default Skills;