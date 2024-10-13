import { Bricolage_Grotesque } from "next/font/google";
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
      colors: {
        yellow: "#FFF6C9",
        lightyellow: "#FDFFDB",
        darkblue: "#0D1E31",
        green: "#D3FFA3",
        blue: "#A6FFDA",
      },
      fontFamily: {
        bricolagegrotesque: ["var(--font-bricolagegrotesque)", "sans-serif"],
        ahganirya: ["var(--font-ahganirya)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
