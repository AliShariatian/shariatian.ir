import Title from "@/components/common/Title";
import { BlogsTitle } from "@/utils/persianTexts";

const BlogPage = () => {
   return (
      <div className="min-h-screen flex items-center justify-center">
         <Title title={BlogsTitle} />
      </div>
   );
};

export default BlogPage;
