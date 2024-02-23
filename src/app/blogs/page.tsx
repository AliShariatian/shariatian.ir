import type { Metadata } from "next";
import { FC } from "react";

import Title from "@/components/common/Title";
import { BlogsTitle, metaTitle } from "@/utils/persianTexts";

export const metadata: Metadata = {
   title: `${metaTitle} نوشته‌ها`,
   description: "آموزش برنامه نویسی فرانت اند و طراحی سایت",
};

const comingSoon: string = "بزودی";

const BlogPage: FC = (): JSX.Element => {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center">
         <main className="w-full text-center">
            <Title title={BlogsTitle} />
         </main>
         <span className="text-lg text-slate-300 mt-9">{comingSoon}...</span>
      </div>
   );
};

export default BlogPage;
