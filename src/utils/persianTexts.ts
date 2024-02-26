// Metadata
export const metaTitle: string = "علی شریعتیان |";

// Navbar
type navbarItems = {
   slug: string;
   title: string;
};
type navbarItemsType = navbarItems[];

export const navbarItems: navbarItemsType = [
   { slug: "/", title: "علی شریعتیان" },
   { slug: "", title: "" },
   { slug: "/blogs", title: "نوشته‌ها" },
   { slug: "/about-me", title: "درباره من" },
];

// Home page
export const HomePageTexts: {
   aliShariatian: string;
   description: string;
} = {
   aliShariatian: "عــلــی شـــریـعـتـیـان",
   description: "توسعه‌دهنده رابط‌ کاربری وبسایت‌های دوست‌داشتنی و زیبا برای خدمات ارزشمند شما",
};

// About me page
export const aboutMePageTexts: {
   aboutMeTitle: string;
   aboutMe: string;
   projects: {
      projectsTitle: string;
      skillUsed: string;
   };
} = {
   aboutMeTitle: "دربـاره مـن",
   aboutMe: `سلام، من علی‌ام،
      عاشق یادگیری و چالش‌های جدید؛ از دوره‌ی نوجوانی در مورد کامپیوتر و دنیای برنامه‌نویسی کنجکاو بودم 
      و بطور خودآموز در سایت‌های آموزشی و یوتیوب مهارت کسب می‌کردم و 
      بعد از وارد شدن به دانشگاه و آشنایی با حوزه طراحی سایت به سمت توسعه فرانت‌اند رفتم و در حال یادگیری بیشتر و
       کسب تجربه در این حوزه هستم. چطوره بریم یکم بیشتر درباره مهارت‌های من آشنا بشیم؛ پس بیا بریم پایین‌تر`,
   projects: {
      projectsTitle: "نمونه‌کارها",
      skillUsed: "ابزارهای استفاده شده در این پروژه",
   },
};

// Blogs page
export const blogPageTexts: {
   BlogsTitle: string;
} = {
   BlogsTitle: "نـوشـتـه‌هـا",
};

// Footer
export const footerTexts: {
   social: string;
} = {
   social: "شـبـکـه‌هـای اجـتـمـاعـی",
};

// 404 NotFound Page
export const warning404Text: string = "اشتباه اومدی! بهتره برگردیم خونه";
