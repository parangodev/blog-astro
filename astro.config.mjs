import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://parango.dev",
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    pagefind(),
    partytown({
      config: {
        config: { debug: false },
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
