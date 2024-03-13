"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
// UTIL
import { navbarItems, navbarItemsType } from "@/public/data/persianTexts";
import { socials } from "@/public/data/social";
// COMPONENT
import { A, Social, NavbarHideOnScroll } from "@/components";

const Navbar: FC = (): JSX.Element => {
   const currentPath = usePathname();

   return (
      <NavbarHideOnScroll>
         <nav className="fixed right-0 top-0 z-40 flex h-16 w-full items-center justify-between bg-slate-950/10 shadow backdrop-blur-lg xl:h-20 xl:px-28">
            <ul className="mx-auto flex justify-center gap-2 xl:mx-0 xl:mr-20 xl:gap-4">
               {navbarItems.map((item: navbarItemsType, index: number) => {
                  {
                     if (index === 1) {
                        return (
                           <div
                              key={index}
                              className="top-0 mx-2 my-auto h-8 w-[1px] bg-gradient-to-t from-transparent via-slate-100/50 to-transparent p-0 opacity-90"
                           />
                        );
                     }

                     return (
                        <A
                           href={item.slug}
                           key={index}
                           className={`${currentPath === item.slug ? "!opacity-100" : ""} p-2 opacity-60 transition-opacity hover:opacity-100`}
                        >
                           <li>{item.title}</li>
                        </A>
                     );
                  }
               })}
            </ul>

            {/* Social links */}
            <div className="hidden flex-row-reverse items-baseline gap-5 opacity-95 xl:flex">
               <Social data={socials.slice(0, 3)} scale={24} />
            </div>
         </nav>
      </NavbarHideOnScroll>
   );
};

export default Navbar;
