// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://fyc.uteq.edu.ec/lectokids",
  integrations: [tailwind(), sitemap(), robotsTxt()],
  base: "/lectokids",
  // output: "static"
});
