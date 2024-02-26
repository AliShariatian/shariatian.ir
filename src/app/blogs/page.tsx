import type { Metadata } from "next";
import { FC } from "react";

import Title from "@/components/sub/Title";
import { blogPageTexts, metaTitle } from "@/utils/persianTexts";

export const metadata: Metadata = {
   title: `${metaTitle} نوشته‌ها`,
   description: "آموزش برنامه نویسی فرانت اند و طراحی سایت",
};

const BlogPage: FC = (): JSX.Element => {
   return (
      <div className="flex flex-col items-center justify-start">
         <main className="w-full text-center">
            <Title title={blogPageTexts.BlogsTitle} />
         </main>

         {/* console.log("Coming Soon!"); */}
         <div dir="ltr" className="font-jetBrains mt-20 flex -z-40">
            <span>
               <span className="!text-[#51bbfe]">console</span>
               <span className="text-white">
                  .<span className="text-[#dcdcaa]">log</span>
               </span>
               <span className="!text-[#ffd700]">(</span>
            </span>
            <div>
               <span className="text-[#ce9178]">{`"Coming Soon!"`}</span>
            </div>
            <span>
               <span className="!text-[#ffd700]">)</span>;
            </span>
         </div>
      </div>
   );
};

export default BlogPage;
