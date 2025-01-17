export type ProjectType = {
  liveLink: string;
  githubLink: string;
  src: string;
  title: string;
  description: string;
  skills: string[];
  imgBgColor?: string;
};

export const projects: ProjectType[] = [
  {
    liveLink: "https://x-shop-eight.vercel.app/",
    src: "/img/projects/xshopcommerce.webp",
    githubLink: "https://github.com/AliShariatian/xshop",
    title: "وبسایت فروشگاهی",
    description: "طراحی فرانت‌اند فروشگاه خرید پوشاک",
    skills: ["ReactJS", "NextJS", "Typescript", "PWA", "Axios", "Redux Toolkit", "React Query", "Tailwind CSS"],
    imgBgColor: "bg-gray-300",
  },
  {
    liveLink: "https://atian-abzar.vercel.app/",
    src: "/img/projects/atianabzar.webp",
    githubLink: "https://github.com/AliShariatian/AtianAbzar.ir",
    title: "آتیان ابزار",
    description: "وبسایت مجموعه ابزارهای محاسباتی روزمره",
    skills: ["ReactJS", "NextJS", "Typescript", "PWA", "Tailwind CSS"],
    imgBgColor: "bg-sky-300",
  },
  {
    liveLink: "https://travel-landing-page-murex.vercel.app/",
    src: "/img/projects/travel.webp",
    githubLink: "https://github.com/AliShariatian/Travel-LandingPage",
    title: "لندینگ‌پیج مسافرتی",
    description: "صفحه لندینگ‌ برای سایت‌های مسافرتی و کمپ",
    skills: ["ReactJS", "NextJS", "Typescript", "Tailwind CSS"],
    imgBgColor: "bg-green-300",
  },
  {
    liveLink: "https://alishariatian.github.io/social-media-clone",
    src: "/img/projects/social.webp",
    githubLink: "https://github.com/AliShariatian/social-media-clone",
    title: "قالب شبکه‌اجتماعی",
    description: "طراحی قالب صفحه ابتدایی یک وبسایت شبکه‌اجتماعی",
    skills: ["HTML", "CSS", "Javascript"],
    imgBgColor: "bg-amber-200",
  },
  {
    liveLink: "/",
    src: "/img/projects/shariatian.webp",
    githubLink: "https://github.com/AliShariatian/shariatian.ir",
    title: "همین وبسایت",
    description: "وبسایت شخصی برای ارائه نمونه‌کارها و انتشار تجربه",
    skills: ["ReactJS", "NextJS", "Typescript", "Tailwind CSS", "Framer Motion", "Material UI"],
    imgBgColor: "bg-slate-300",
  },
];
