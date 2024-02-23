import Title from "@/components/common/Title";
import { aboutMeTitle } from "@/utils/persianTexts";

const AboutMePage = () => {
   return (
      <div className="min-h-screen flex items-center justify-center">
         <main className="w-full text-center">
            <Title title={aboutMeTitle} />
         </main>
      </div>
   );
};

export default AboutMePage;
