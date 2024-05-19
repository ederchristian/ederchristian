// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercelServerless from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown'
import icon from 'astro-icon';

export default defineConfig({
  output: 'server',
  adapter: vercelServerless(),
  site: 'https://ederchristian.com',
  integrations: [mdx(), sitemap(), icon(), react(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
