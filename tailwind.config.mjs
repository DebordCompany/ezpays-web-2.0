/** @type {import('tailwindcss').Config} */
import defaulTheme from "tailwindcss/defaultTheme";
export default {
  important: true,
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "330px",
        sm: "540px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "2000px",
      },
      colors: {
        black: "#333",
        "soft-gray": "#AFAFAF",
        primary: "#FF00FF",
      },
      maxWidth: {
        "8xl": "2000px",
      },
      fontFamily: {
        sans: ["lexend", ...defaulTheme.fontFamily.sans],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
