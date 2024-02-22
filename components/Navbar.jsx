import Link from "next/link";

const Navbar = () => {
   return (
      <nav className="fixed top-0 right-0 h-14 pr-10 z-50">
         <ul className="flex justify-center gap-8 mr-20 p-5 *:p-2 *:opacity-60 hover:*:opacity-100 *:transition-opacity">
            <li>
               <Link href="/">خانه</Link>
            </li>
            <li>
               <Link href="/about-me">درباره من</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
