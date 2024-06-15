/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#6c4e3f",
        creme: "#FAF6F2",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, #6C4E3F, #6C4E3F 50%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.01) 100%)",
      },
    },
  },
  plugins: [],
};
