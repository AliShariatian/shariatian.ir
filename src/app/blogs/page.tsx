import type { Metadata } from "next";
import { FC } from "react";

import Title from "@/components/sub/Title";
import ConsoleLog from "@/components/sub/ConsoleLog";
import { blogPageTexts, metaTitle } from "@/utils/persianTexts";
import ShowWhenScroll from "@/components/effects/ShowWhenScroll";

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

         <ShowWhenScroll>
            <ConsoleLog />
         </ShowWhenScroll>
      </div>
   );
};

export default BlogPage;
