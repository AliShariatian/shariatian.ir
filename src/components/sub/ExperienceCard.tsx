import { FC } from "react";
import Image from "next/image";
import { ExperienceType } from "@/public/data/experience";

const ExperienceCard: FC<ExperienceType> = ({ endDate, imageSrc, learned, startDate, title }): JSX.Element => {
   return (
      <div className="flex w-full items-start gap-6 rounded-2xl border border-slate-900 p-5 shadow-md">
         <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-slate-700 xl:size-24">
            <Image
               src={imageSrc}
               alt={title}
               width={80}
               height={80}
               className="aspect-square w-full transition-transform hover:scale-110"
            />
         </div>

         <div>
            <div className="flex flex-col gap-7">
               <span className="text-xl font-bold xl:text-2xl">{title}</span>

               <div className="flex flex-col gap-3 text-sm xl:flex-row xl:gap-9">
                  <p className="flex gap-2">
                     <span>شروع همکاری:</span>
                     <span className="text-slate-300">{startDate}</span>
                  </p>
                  <p className="flex gap-2">
                     <span>پایان همکاری:</span>
                     <span className="text-slate-300">{endDate}</span>
                  </p>
               </div>

               <hr className="border-slate-900" />

               <div className="flex flex-col items-start gap-4 xl:flex-row">
                  <span className="text-base font-semibold xl:text-lg">آموخته‌ها:</span>

                  <div dir="ltr" className="flex w-fit flex-wrap justify-start gap-x-1 gap-y-3 text-xs xl:gap-x-2">
                     {learned.map((item, index) => (
                        <span key={index} className="rounded-full bg-slate-900 px-3 py-1 text-xs xl:px-4 xl:text-[13px]">
                           {item}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ExperienceCard;
