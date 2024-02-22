/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],

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
