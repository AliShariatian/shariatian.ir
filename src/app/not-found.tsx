import { FC } from "react";
import { warning404Text } from "@/utils/persianTexts";
import A from "@/components/sub/A/A";

const NotFound404Page: FC = (): JSX.Element => {
   return (
      <main className="flex flex-col justify-center items-center gap-10 mt-20 xl:mt-9">
         <span className="font-dana font-bold text-9xl animate-pulse text-red-600 drop-shadow-[0_0_55px_rgba(255,0,0,0.7)]">404</span>
         <div className="flex flex-col gap-7 items-center">
            <p className="text-lg">{warning404Text}</p>
            <A href="/" className="py-2 px-9 rounded-xl bg-green-500 transition-[outline-offset] outline -outline-offset-4 hover:outline-offset-4 outline-green-500">
               بـریـم
            </A>
         </div>
      </main>
   );
};

export default NotFound404Page;
