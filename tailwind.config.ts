import type { Config } from "tailwindcss";

const config: Config = {
   content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            dana: ["var(--font-dana)"],
            morabba: ["var(--font-morabba)"],
         },
      },
   },
   plugins: [],
};

export default config;

