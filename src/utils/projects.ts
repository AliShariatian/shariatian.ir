export type ProjectType = {
   link: string;
   src: string;
   title: string;
   description: string;
   skills: string[];
   imgBgColor?: string;
};

export const projects: ProjectType[] = [
   {
      link: "https://medium.shariatian.ir",
      src: "/img/projects/medium.webp",
      title: "کلون سایت Medium",
      description: "پروژه مشابه‌سازی سایت وبلاگ‌نویسی Medium",
      skills: ["React JS", "Context API", "Axios", "EditorJS", "Lodash", "Tailwind CSS", "Framer Motion"],
   },
   {
      link: "https://galaxy.shariatian.ir",
      src: "/img/projects/galaxy.webp",
      title: "لندینگ پیج گلکسی",
      description: "پروژه تک‌صفحه‌ای برای نمایش نمونه‌کارها",
      skills: ["ReactJS", "NextJS", "Typescript", "Tailwind CSS", "Framer Motion"],
      imgBgColor: "bg-indigo-300",
   },
   {
      link: "https://alishariatian.github.io/social-media-clone",
      src: "/img/projects/social.webp",
      title: "وبسایت شبکه اجتماعی",
      description: "طراحی صفحه ابتدایی یک وبسایت شبکه اجتماعی",
      skills: ["HTML", "CSS", "Javascript"],
      imgBgColor: "bg-amber-200",
   },
   {
      link: "/",
      src: "/img/projects/shariatian.webp",
      title: "همین وبسایت",
      description: "وبسایت شخصی برای ارائه نمونه‌کارها و انتشار تجربه",
      skills: ["ReactJS", "NextJS", "Typescript", "Tailwind CSS", "Framer Motion", "Material UI"],
      imgBgColor: "bg-slate-300",
   },
];
