"use client";

import Link from "next/link";
import { PiCodeThin } from "react-icons/pi";
import { motion } from "framer-motion";

function CenterPanel() {
   return (
      <motion.div
         initial={{ y: 100, opacity: 0 }}
         animate={{
            y: 0,
            opacity: 1,
            transition: {
               duration: 0.8,
               delay: 0.6,
               type: "spring",
               stiffness: 200,
            },
         }}
         className="w-full"
      >
         <section className="bg-[#1C1C1C] lg:bg-transparent rounded-2xl">
            <div className="flex gap-x-6 p-4">
               <PiCodeThin className="text-6xl text-neutral-50" />
               <div>
                  <h3 className="text-2xl font-RubikMedium text-neutral-300">
                     Semicolon, <span className="text-sm text-neutral-400">A Front-end Dev Blog</span>
                  </h3>
                  <p className="max-w-sm text-neutral-400 text-sm">
                     I design and code beautifully simple things, and <br /> occasionally i write about them
                  </p>
               </div>
            </div>

            <div className="border border-neutral-700 my-5" />

            {/* post list */}
            <main className="mt-6 bg-[#1C1C1C] rounded-lg text-neutral-400 overflow-hidden border border-neutral-800 *:border-b last:border-b-0 *:border-neutral-800">
               {/* posts */}
               <div className="hover:bg-neutral-800 duration-200 transition ease-in p-4">
                  <Link href="/post/1">
                     <h2 className="text-base font-RubikMedium hover:text-neutral-300">Smooth Animation with React and Framer Motion</h2>
                  </Link>
                  <div className="flex items-center gap-x-2 font-RubikBold mt-2">
                     <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">TypeScript</p>
                     <div className="w-1 h-1 rounded-full bg-neutral-400" />
                     <span className="text-xs">Sunday, July 22, 2023</span>
                  </div>
               </div>

               <div className="hover:bg-neutral-800 duration-200 transition ease-in p-4 ">
                  <Link href="/post/2">
                     <h2 className="text-base font-RubikMedium hover:text-neutral-300">How to animation with Tailwind</h2>
                  </Link>
                  <div className="flex items-center gap-x-2 font-RubikBold mt-2">
                     <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px]">TailwindCSS</p>
                     <div className="w-1 h-1 rounded-full bg-neutral-400" />
                     <span className="text-xs">Thursday, November 4, 2022</span>
                  </div>
               </div>
               {/* end posts */}
            </main>
            {/* end post list */}
         </section>
      </motion.div>
   );
}

export default CenterPanel;
