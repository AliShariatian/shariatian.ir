// TYPE
import { FC } from "react";
import type { Metadata } from "next";
// UTIL
import { blogPageTexts } from "@/public/data/persianTexts";
// COMPONENT
import { Title, ConsoleLog, ShowWhenScroll } from "@/components";
// ----------------------------------------------------------------

export const metadata: Metadata = {
  title: "نوشته‌ها",
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
