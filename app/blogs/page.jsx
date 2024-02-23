import Title from "@/components/common/Title";
import { BlogsTitle, metaTitle } from "@/utils/persianTexts";

export const metadata = {
   title: `${metaTitle} نوشته‌ها`,
   description: "آموزش برنامه نویسی فرانت اند و طراحی سایت",
};

const BlogPage = () => {
   return (
      <div className="min-h-screen flex items-center justify-center">
         <Title title={BlogsTitle} />
      </div>
   );
};

export default BlogPage;
