"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarItems, navbarItemsType } from "@/utils/persianTexts";
import Social from "../sub/Social";
import { topNavBarSocials } from "@/utils/social";
import NavbarHideOnScroll from "../effects/NavbarHideOnScroll";

const Navbar: FC = (): JSX.Element => {
   const currentPath = usePathname();

   return (
      <NavbarHideOnScroll>
         <nav className="fixed shadow top-0 right-0 w-full bg-slate-950/10 backdrop-blur-lg flex items-center justify-between h-16 xl:h-24 xl:px-28 z-40">
            <ul className="flex justify-center gap-2 xl:gap-4 xl:mr-20 mx-auto xl:mx-0">
               {navbarItems.map((item: navbarItemsType, index: number) => {
                  {
                     if (index === 1) {
                        return <div key={index} className="w-0 h-6 p-0 mx-2 my-auto border-l border-slate-100/60 opacity-60" />;
                     }

                     return (
                        <Link href={item.slug} key={index} className={`${currentPath === item.slug ? "!opacity-100" : ""} p-2 opacity-60 hover:opacity-100 transition-opacity`}>
                           <li>{item.title}</li>
                        </Link>
                     );
                  }
               })}
            </ul>

            {/* Social links */}
            <div className="hidden xl:flex flex-row-reverse gap-5 items-baseline opacity-95">
               <Social data={topNavBarSocials} scale={24} />
            </div>
         </nav>
      </NavbarHideOnScroll>
   );
};

export default Navbar;
