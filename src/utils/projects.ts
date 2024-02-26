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
      liveLink: "https://medium.shariatian.ir",
      src: "/img/projects/medium.webp",
      githubLink: "https://github.com/AliShariatian/medium-clone",
      title: "کلون سایت Medium",
      description: "پروژه مشابه‌سازی سایت وبلاگ‌نویسی Medium",
      skills: ["React JS", "Context API", "Axios", "EditorJS", "Lodash", "Tailwind CSS", "Framer Motion"],
   },
   {
      liveLink: "https://galaxy.shariatian.ir",
      src: "/img/projects/galaxy.webp",
      githubLink: "",
      title: "لندینگ پیج گلکسی",
      description: "پروژه تک‌صفحه‌ای برای نمایش نمونه‌کارها",
      skills: ["ReactJS", "NextJS", "Typescript", "Tailwind CSS", "Framer Motion"],
      imgBgColor: "bg-indigo-300",
   },
   {
      liveLink: "https://alishariatian.github.io/social-media-clone",
      src: "/img/projects/social.webp",
      githubLink: "https://github.com/AliShariatian/social-media-clone",
      title: "قالب شبکه‌اجتماعی",
      description: "طراحی قالب صفحه ابتدایی یک وبسایت شبکه اجتماعی",
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
