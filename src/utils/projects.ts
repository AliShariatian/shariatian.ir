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
      link: "https://galaxy.shariatian.ir",
      src: "/img/projects/galaxy.webp",
      title: "لندینگ پیج گلکسی",
      description: "پروژه تک‌صفحه‌ای لندینگ پیج برای نمایش نمونه‌کارها",
      skills: ["React JS", "Next JS", "Tailwind CSS", "Framer Motion"],
      imgBgColor: "bg-indigo-300",
   },
   {
      link: "https://medium.shariatian.ir",
      src: "/img/projects/medium.webp",
      title: "کلون سایت Medium",
      description: "پروژه مشابه‌سازی سایت وبلاگ‌نویسی Medium",
      skills: ["React JS", "Context API", "Axios", "EditorJS", "Lodash", "Tailwind CSS", "Framer Motion"],
   },
];
