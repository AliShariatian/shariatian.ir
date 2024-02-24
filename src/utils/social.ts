export type SocialType = {
   name: string;
   src: string;
   link: string;
};

type SocialsType = SocialType[];

export const topNavBarSocials: SocialsType = [
   {
      name: "Linkedin",
      src: "/img/linkedin.svg",
      link: "https://linkedin.com/in/AliShariatian",
   },
   {
      name: "X",
      src: "/img/x.svg",
      link: "https://twitter.com/Ali_Shariatian",
   },
   {
      name: "Github",
      src: "/img/github.svg",
      link: "https://github.com/AliShariatian",
   },
];

export const footerSocials: SocialsType = [
   {
      name: "Linkedin",
      src: "/img/social/linkedin.svg",
      link: "https://linkedin.com/in/AliShariatian",
   },
   {
      name: "X",
      src: "/img/social/x.svg",
      link: "https://twitter.com/Ali_Shariatian",
   },
   {
      name: "Github",
      src: "/img/social/github.svg",
      link: "https://github.com/AliShariatian",
   },
   {
      name: "CodePen",
      src: "/img/social/codepen.svg",
      link: "https://codepen.io/AliShariatian",
   },
   {
      name: "WakaTime",
      src: "/img/social/wakatime.svg",
      link: "https://wakatime.com/@alishariatian",
   },
];
