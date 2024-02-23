"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navbarItems } from "@/utils/persianTexts";

const Navbar = () => {
   const currentPath = usePathname();

   return (
      <nav className="fixed top-0 right-0 w-full bg-slate-950/50 backdrop-blur-md flex items-center h-24 px-28 z-50">
         <ul className="flex justify-center gap-4 mr-20">
            {navbarItems.map((item, index) => {
               {
                  if (index === 1) {
                     return <div key={index} className="w-0 h-6 p-0 mx-3 my-auto border-l border-slate-100/60 opacity-60" />;
                  }

                  return (
                     <Link href={item.slug} key={index} className={`${currentPath === item.slug ? "opacity-100" : ""} p-2 opacity-60 hover:opacity-100 transition-opacity`}>
                        <li>{item.title}</li>
                     </Link>
                  );
               }
            })}
         </ul>
      </nav>
   );
};

export default Navbar;
