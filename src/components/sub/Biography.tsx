import { FC } from "react";
import Image from "next/image";
import ChatGPT from "@/public/img/chatgpt.svg";
import TextGenerate from "../effects/TextGenerate";
import { aboutMePageTexts } from "@/public/data/persianTexts";

const Biography: FC = (): JSX.Element => {
  return (
    <section className="mx-auto px-9 text-justify leading-8 text-slate-300 xl:w-1/2 xl:px-5">
      <div className="flex grow items-center gap-3 rounded-full border-2 border-slate-800 bg-slate-900 py-2 pl-0 pr-5 xl:w-fit xl:py-2 xl:pl-16">
        <Image src={ChatGPT} alt="ChatGPT" className="size-5 opacity-60 invert xl:size-6" />
        <p className="text-slate-300">علی شریعتیان کیه؟</p>
      </div>

      <TextGenerate words={aboutMePageTexts.aboutMe} className="mt-6" />
    </section>
  );
};

export default Biography;
