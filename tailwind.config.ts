import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
        orange: "var(--orange)",
        black: "var(--black)",
        grey: "var(--grey)",
        yellow: "var(--yellow)",
      },
      boxShadow: {
        default: "0px 2.09px 11.06px 0px #00000040",
      },
    },
  },
  plugins: [],
};
export default config;
