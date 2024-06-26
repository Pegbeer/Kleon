import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'green':'#38E25D',
        'primary':'#6418C3',
        'surface':'#1D1B33'
      },
      borderWidth:{
        '1':"1px"
      },
      dropShadow:{
        'sm':'drop-shadow(0 0 30px #FFF)'
      }
    },
  },
  plugins: [
  ],
};
export default config;
