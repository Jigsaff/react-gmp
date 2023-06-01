import type { Config } from "tailwindcss";

export default {
   content: ["./app/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            'pink-red': '#f65261',
            'light-black': '#232323',
            'dark-gray': '#424242',
            'light-gray': '#555555',
         },
         backgroundImage: {
            'header': 'url(\'app/assets/HeaderBackground.png\')',
         },
      },
   },
   plugins: [],
} satisfies Config;
