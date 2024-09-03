import { FC } from "react";
import { experiences } from "@/public/data/experience";
import { ExperienceCard, ShowWhenScroll } from "@/components";

const Experience: FC = (): JSX.Element => {
   return (
      <section className="mb-96 mt-20 flex w-full flex-col items-center justify-center">
         <ShowWhenScroll className="mb-20">
            <h4 className="text-4xl font-extrabold">تجربه‌ها</h4>
         </ShowWhenScroll>

         <div className="flex w-full flex-col gap-9 max-xl:px-5 xl:w-1/3">
            {experiences.map((item, index) => (
               <ExperienceCard key={index} {...item} />
            ))}
         </div>
      </section>
   );
};

export default Experience;
