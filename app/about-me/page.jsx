import Title from "@/components/common/Title";
import { aboutMeTitle, metaTitle } from "@/utils/persianTexts";

export const metadata = {
   title: `${metaTitle} درباره من`,
   description: "توسعه دهنده فرانت اند | برنامه نویس سایت | توسعه دهنده رابط کاربری | طراح سایت",
};

const AboutMePage = () => {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center">
         <main className="w-full text-center">
            <Title title={aboutMeTitle} />
         </main>
      </div>
   );
};

export default AboutMePage;
