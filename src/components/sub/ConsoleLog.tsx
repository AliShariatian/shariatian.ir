"use client";

import { FC } from "react";

// This for fun :)

const ConsoleLog: FC = (): JSX.Element => {
   console.log("Coming Soon!");

   return (
      <div dir="ltr" className="font-jetBrains mt-20 flex">
         <span>
            <span className="!text-[#51bbfe]">console</span>
            <span className="text-white">
               .<span className="text-[#dcdcaa]">log</span>
            </span>
            <span className="!text-[#ffd700]">(</span>
         </span>
         <div>
            <span className="text-[#ce9178]">{`"Coming Soon!"`}</span>
         </div>
         <span>
            <span className="!text-[#ffd700]">)</span>;
         </span>
      </div>
   );
};

export default ConsoleLog;
