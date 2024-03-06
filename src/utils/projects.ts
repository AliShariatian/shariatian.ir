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
      liveLink: "https://xshop.shariatian.ir",
      src: "/img/projects/xshop.webp",
      githubLink: "https://github.com/AliShariatian/xshop",
      title: "وبسایت فروشگاهی",
      description: "طراحی فرانت‌اند فروشگاه خرید پوشاک",
      skills: ["ReactJS", "NextJS", "Typescript", "PWA", "Axios", "Redux Toolkit", "React Query", "i18Next", "Tailwind CSS"],
      imgBgColor: "bg-gray-400",
   },
   {
      liveLink: "https://toolbox.shariatian.ir",
      src: "/img/projects/toolbox.webp",
      githubLink: "https://github.com/AliShariatian/toolbox",
      title: "ابزارهای برنامه‌نویسی",
      description: "وبسایت مجموعه ابزارهای برنامه‌نویسی فرانت‌اند",
      skills: ["ReactJS", "NextJS", "Typescript", "Tailwind CSS"],
      imgBgColor: "bg-sky-200",
   },
   {
      liveLink: "https://travel.shariatian.ir",
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
