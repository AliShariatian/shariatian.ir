// Navbar
export type TNavbarItems = {
  slug: string;
  title: string;
};

export const navbarItems: TNavbarItems[] = [
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
  contactWithMeTitle: string;
  downloadMyResume: string;
  projects: {
    mainSkillsTitle: string;
    projectsTitle: string;
    skillUsed: string;
  };
} = {
  aboutMeTitle: "دربـاره مـن",
  aboutMe: `علی یه توسعه‌دهنده فرانت‌انده که توی ساخت وبسایت‌های واکنش‌گرا مهارت داره. اون می‌تونه طرح‌های UI/UX رو به واقعیت تبدیل کنه. علی عاشق یادگیری و چالش‌های جدیده و توی کار تیمی و ارتباط با هم‌تیمی‌هاش خیلی خوب عمل می‌کنه.

اون توی دوران نوجوانی به کامپیوتر و برنامه‌نویسی علاقه‌مند شد و با استفاده از منابع آنلاین مثل سایت‌های آموزشی و یوتیوب، آموزش دید و مهارت‌هاش رو ارتقا داد. بعد از ورود به دانشگاه و آشنایی بیشتر با طراحی وب، به سمت توسعه فرانت‌اند رفت و حالا هم با شور و اشتیاق در حال یادگیری و کسب تجربه توی این زمینه‌ست.

اگه می‌خواید بیشتر با مهارت‌های علی آشنا بشید، پیشنهاد می‌کنم به بخش‌های پایین سر بزنید...`,

  contactWithMeTitle: "اطلاعات تماس",
  downloadMyResume: "دریـافـت رزومـه",
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
