import Social from "@/components/Social/page";

const aliShariatian = "عــلــی شـــریـعـتـیـان";
const description = "توسعه دهنده فرانت‌اند";
const social = "شـبـکـه‌هـای اجـتـمـاعـی";

const HomePage = () => {
   return (
      <div className="relative flex flex-col items-center justify-center h-full">
         <nav></nav>
         <main className="w-full -mt-40 text-center">
            <div className="relative text-ellipsis text-center">
               <span className="absolute right-0 -top-8 -z-10 w-full text-slate-900 select-none font-morabba text-9xl font-bold">{aliShariatian}</span>
               <h2 className="font-morabba text-8xl font-extrabold">{aliShariatian}</h2>
            </div>
            <h1 className="text-3xl mt-12 font-dana font-light text-slate-300 opacity-[0.5]">{description}</h1>
         </main>
         <footer>
            <div className="absolute text-sm left-9 bottom-9 flex gap-3 items-center opacity-50 hover:opacity-100 transition-opacity">
               <div className="flex flex-row-reverse gap-3 items-baseline">
                  <Social scale={24} />
               </div>
               <span className="font-dana font-thin mb-1">________</span>
               <p>{social}</p>
            </div>
         </footer>
      </div>
   );
};

export default HomePage;
