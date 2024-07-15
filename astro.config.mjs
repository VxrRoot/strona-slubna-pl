import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: "https://www.strona-slubna.pl",
  integrations: [
    react(),
    tailwind(),
    sitemap({ filter: (page) => !page.includes("/dziekujemy") }),
  ],
  output: "hybrid",
  adapter: vercel(),
});
