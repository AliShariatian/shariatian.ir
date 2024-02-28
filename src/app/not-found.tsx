import { FC } from "react";
import { warning404Text } from "@/utils/persianTexts";
import A from "@/components/sub/A/A";

const NotFound404Page: FC = (): JSX.Element => {
   return (
      <main className="mt-20 flex flex-col items-center justify-center gap-10 xl:mt-9">
         <span className="animate-pulse font-dana text-9xl font-bold text-red-600 drop-shadow-[0_0_55px_rgba(255,0,0,0.7)]">404</span>
         <div className="flex flex-col items-center gap-7">
            <p className="text-lg">{warning404Text}</p>
            <A
               href="/"
               className="rounded-xl bg-green-500 px-9 py-2 outline -outline-offset-4 outline-green-500 transition-[outline-offset] hover:outline-offset-4"
            >
               بـریـم
            </A>
         </div>
      </main>
   );
};

export default NotFound404Page;
