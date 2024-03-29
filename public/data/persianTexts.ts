// Metadata
export const metaTitle: string = "علی شریعتیان |";

// Navbar
export type navbarItemsType = {
   slug: string;
   title: string;
};

export const navbarItems: navbarItemsType[] = [
   { slug: "/", title: "علی شریعتیان" },
   { slug: "line", title: "line" },
   { slug: "/blogs", title: "نوشته‌ها" },
   { slug: "/about-me", title: "درباره من" },
];

// Home page
export const HomePageTexts: {
   aliShariatian: string;
   description: string;
} = {
   aliShariatian: "عــلــی شـــریـعـتـیـان",
   description: "توسعه‌دهنده رابط‌ کاربری وبسایت‌های دوست داشتنی برای خدمات ارزشمند شما",
};

// About me page
export const aboutMePageTexts: {
   aboutMeTitle: string;
   aboutMe: string;
   projects: {
      mainSkillsTitle: string;
      projectsTitle: string;
      skillUsed: string;
   };
} = {
   aboutMeTitle: "دربـاره مـن",
   aboutMe: `سلام، من علی‌ام، توسعه‌دهنده فرانت‌اند،
      عاشق یادگیری و چالش‌های جدید؛ از دوره‌ی نوجوانی در مورد کامپیوتر و دنیای برنامه‌نویسی کنجکاو بودم 
      و بطور خودآموز در سایت‌های آموزشی و یوتیوب مهارت کسب می‌کردم و 
      بعد از وارد شدن به دانشگاه و آشنایی با حوزه طراحی سایت به سمت توسعه فرانت‌اند رفتم و در حال یادگیری بیشتر و
       کسب تجربه در این حوزه هستم. چطوره بریم یکم بیشتر درباره مهارت‌های من آشنا بشیم؛ پس بریم پایین‌تر`,
   projects: {
      mainSkillsTitle: "مهارت‌های اصلی",
      projectsTitle: "نمونه‌کارها",
      skillUsed: "ابزارهای اصلی استفاده شده در این پروژه",
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
export const warning404Text: string = "اشتباه اومدی عزیرم! بهتره برگردیم خونه";
