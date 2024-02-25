import type { Metadata } from "next";
import { FC } from "react";

import Title from "@/components/common/Title";
import { blogPageTexts, metaTitle } from "@/utils/persianTexts";

export const metadata: Metadata = {
   title: `${metaTitle} نوشته‌ها`,
   description: "آموزش برنامه نویسی فرانت اند و طراحی سایت",
};

const comingSoon: string = "بزودی";

const BlogPage: FC = (): JSX.Element => {
   return (
      <div className="  flex flex-col items-center justify-start">
         <main className="w-full text-center">
            <Title title={blogPageTexts.BlogsTitle} />
         </main>

         {/*  */}
         <div dir="ltr" className="font-jetBrains mt-24 flex -z-40">
            <span>
               Console
               <span className="text-white">
                  .<span className="text-[#e06c75]">log</span>
               </span>
               {`("`}
            </span>
            <div className="string">
               <span className="greeting fa !font-dana">بزودی!</span>
               <span className="greeting en">Coming Soon!</span>
               <span className="greeting es">¡Hola Mundo!</span>
               <span className="greeting de">Hallo Welt!</span>
            </div>
            <span className="closure">{`");`}</span>
         </div>
      </div>
   );
};

export default BlogPage;
