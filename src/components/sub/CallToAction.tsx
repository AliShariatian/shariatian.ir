import { FC } from "react";
import Image from "next/image";
import { TiltEffect } from "@/components";
import Avatar from "@/public/img/avatar.jpg";
import { ShowWhenScroll } from "@/components";
import { aboutMePageTexts } from "@/public/data/persianTexts";

const CallToAction: FC = (): JSX.Element => {
   return (
      <section className="mx-auto mb-28 mt-52 flex w-full xl:mb-52 xl:w-2/5">
         <ShowWhenScroll className="relative w-full">
            <h4 className="text-center text-2xl font-extrabold xl:text-right">{aboutMePageTexts.contactWithMeTitle}</h4>

            <div className="mt-9 flex flex-col items-center gap-6 xl:flex-row">
               <TiltEffect>
                  <Image
                     src={Avatar}
                     alt="Ali Shariatian"
                     width={200}
                     height={200}
                     className="size-48 rounded-2xl transition-transform hover:scale-105"
                  />
               </TiltEffect>

               <div className="flex flex-col gap-6 py-2">
                  <div className="flex flex-col items-start gap-1">
                     <p className="mt-2 text-lg font-bold">ایمیل</p>
                     <a href="mailto:shariatian92@gmail.com" className="text-base opacity-90 hover:underline">
                        Shariatian92@gmail.com
                     </a>
                  </div>

                  <div className="flex flex-col items-start gap-1">
                     <p className="mt-2 text-lg font-bold">تماس</p>
                     <a dir="ltr" href="tel:09114962339" className="text-base opacity-90 hover:underline">
                        0911 496 2339
                     </a>
                  </div>
               </div>

               <a
                  href="https://api-shariatian.storage.iran.liara.space/Ali%20Shariatian%20-%20Resume.pdf"
                  target="_blank"
                  className="static bottom-0 left-0 mt-4 rounded-md bg-sky-600 px-9 py-2 transition-transform hover:scale-105 xl:absolute xl:mt-0 xl:px-3"
               >
                  {aboutMePageTexts.downloadMyResume}
               </a>
            </div>
         </ShowWhenScroll>
      </section>
   );
};

export default CallToAction;
