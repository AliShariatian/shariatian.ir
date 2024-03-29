import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{ts,tsx}",
      "./src/components/**/*.{ts,tsx}",
      "./src/app/**/*.{ts,tsx}",
      "./src/data/**/*.{ts,tsx}",
      "./public/data/*"
   ],
   theme: {
      extend: {
         fontFamily: {
            dana: ["var(--font-dana)"],
            morabba: ["var(--font-morabba)"],
            jetBrains: ["var(--font-jetBrains)"],
         },
      },
   },
   plugins: [],
};

export default config;
