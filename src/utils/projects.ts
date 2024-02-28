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
