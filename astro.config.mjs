import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://nextplus.org',
  integrations: [mdx(), sitemap(), robotsTxt()],
  output: "hybrid",
  adapter: cloudflare()
});