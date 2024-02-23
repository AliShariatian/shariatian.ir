"use client";

import { PiBookOpenTextLight, PiHouseLight } from "react-icons/pi";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Social from "../common/Social";
// import EmailSubscribe from "./EmailSubscribe/EmailSubscribe";

function LeftPanel() {
   const skills = [
      { label: "ReactJS" },
      { label: "NextJS" },
      { label: "Redux" },
      { label: "TypeScript" },
      { label: "TailwindCSS" },
      { label: "FramerMotion" },
      { label: "HTML" },
      { label: "CSS" },
      { label: "JavaScript" },
      { label: "Git" },
      { label: "Figma" },
   ];

   return (
      <motion.div
         initial={{ y: 10, opacity: 0 }}
         animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, type: "spring", stiffness: 200 },
         }}
         drag
         dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
         dragElastic={0.8}
         className="h-fit sticky top-5 z-20"
      >
         <div className="w-full p-3 border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C]">
            <div className="w-full">
               <div className="w-full flex justify-between">
                  <Link href="/" title="Ali Shariatian" alt="Ali Shariatian">
                     <Image width={1000} height={1000} className="size-28 border border-neutral-800 rounded-full object-cover shadow-xl" src="/avatar.jpg" alt="ali shariatian" />
                  </Link>

                  <div className="flex gap-x-1 h-fit">
                     <Link href="/">
                        <div title="Home" className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                           <PiHouseLight className="text-neutral-100" />
                        </div>
                     </Link>
                     <Link href="/">
                        <div title="Download My CV" className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                           <PiBookOpenTextLight className="text-neutral-100" />
                        </div>
                     </Link>
                  </div>
               </div>

               <h1 className="font-RubikExtraBold text-xl text-neutral-300 mt-3">Ali Shariatian</h1>
               <a className="text-xs font-RubikMedium text-neutral-300 mt-2" href="mailto:shariatian92@gmail.com">
                  shariatian92@gmail.com
               </a>

               <div className="flex w-full">
                  <div className="flex flex-wrap gap-[0.35rem] text-xs my-4">
                     {skills.map((item) => (
                        <p key={item.label} className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                           {item.label}
                        </p>
                     ))}
                  </div>
               </div>
            </div>

            {/* ---email subscribe--- */}
            {/* <EmailSubscribe/> */}

            <div className="w-full mt-5 text-neutral-300">
               <h2 className="font-RubikBold my-4">Bio</h2>
               <p className="text-[12px]  font-RubikRegular my-3">
                  The world of digital design and <br /> development is constantly evolving and so <br /> has my role over the last 7 years.{" "}
               </p>
            </div>

            <div className="border border-neutral-800 my-5" />
            <div className="flex items-center justify-evenly mb-3">
               <Social />
            </div>
         </div>
      </motion.div>
   );
}

export default LeftPanel;