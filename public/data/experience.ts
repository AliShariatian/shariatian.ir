export type ExperienceType = {
  title: string;
  imageSrc: string;
  startDate: string;
  endDate: string;
  learned: string[];
};

export const experiences: ExperienceType[] = [
  {
    title: "دهات مافیا",
    imageSrc: "/img/experience/dohat-mafia.webp",
    startDate: "شهریور 1403",
    endDate: "دی 1403",
    learned: ["NextJS", "TypeScript", "Zustand", "TailwindCSS"],
  },
  {
    title: "تسلا کامرس",
    imageSrc: "/img/experience/teslacommerce.webp",
    startDate: "خرداد 1403",
    endDate: "شهریور 1403",
    learned: ["Teamwork", "NextJS", "TypeScript", "React Query", "TailwindCSS"],
  },
  {
    title: "پروژه‌های شخصی",
    imageSrc: "/img/experience/me.jpg",
    startDate: "مرداد 1402",
    endDate: "ادامه دارد",
    learned: ["ReactJS", "NextJS", "TypeScript", "Redux", "ShadCN", "MaterialUI", "React Query", "TailwindCSS", "Git"],
  },
];
