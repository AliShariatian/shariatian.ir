import "./globals.css";
import Theming from "@/components/providers/Theme";
import LeftPanel from "@/components/LeftPanel";
// import RightPanel from "@/components/RightPanel";

export const metadata = {
   title: "Ali Shariatian | Front-end Developer",
   description: "Ali Shariatian, a front-end developer blog",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <Theming>
               <div className="w-full lg:w-11/12 mx-auto xl:w-9/12 lg:mx-auto lg:max-w-[78rem] grid grid-cols-12 gap-3 my-5">
                  <div className="hidden lg:block lg:col-start-1 lg:col-end-4 w-full">
                     <LeftPanel />
                  </div>
                  <div className="col-start-1 col-end-13 lg:col-start-4 mx-auto w-11/12 lg:w-full">{children}</div>
                  {/* <div><RightPanel /></div> */}
               </div>
            </Theming>
         </body>
      </html>
   );
}
