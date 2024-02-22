import Image from "next/image";

function Social({ scale = 20 }) {
   const socials = [
      {
         name: "Linkedin",
         src: "/social/linkedin.svg",
         link: "https://linkedin.com/in/AliShariatian",
      },
      {
         name: "X",
         src: "/social/x.svg",
         link: "https://twitter.com/Ali_Shariatian",
      },
      {
         name: "Github",
         src: "/social/github.svg",
         link: "https://github.com/AliShariatian",
      },
      {
         name: "CodePen",
         src: "/social/codepen.svg",
         link: "https://codepen.io/AliShariatian",
      },
      {
         name: "WakaTime",
         src: "/social/wakatime.svg",
         link: "https://wakatime.com/@alishariatian",
      },
   ];

   return (
      <>
         {socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank" className="hover-scale opacity-90">
               <Image src={social.src} width={scale} height={scale} alt={`Ali Shariatian ${social.name}`} title={`My ${social.name}`} className="invert cursor-pointer" />
            </a>
         ))}
      </>
   );
}

export default Social;
