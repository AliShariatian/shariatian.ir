import Link from "next/link";

import { home, aboutMe, blog } from "@/utils/persianTexts";

const Navbar = () => {
   return (
      <nav className="fixed top-0 right-0 w-full bg-slate-950/50 backdrop-blur-md flex items-center h-24 px-28 z-50">
         <ul className="flex justify-center gap-4 mr-20 *:p-2 *:opacity-60 hover:*:opacity-100 *:transition-opacity">
            <li>
               <Link href="/">{home}</Link>
            </li>
            <div className="w-0 !p-0 border-l h-6 border-slate-100/60 mx-3 my-auto" />
            <li>
               <Link href="/blogs">{blog}</Link>
            </li>
            <li>
               <Link href="/about-me">{aboutMe}</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
