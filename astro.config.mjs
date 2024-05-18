// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: {
      service: 'cloudflare'
    }
  }),
  site: 'https://ederchristian.com',
  integrations: [mdx(), sitemap(), icon(), react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    minify: true,
    sourcemap: true,
    target: 'esnext'
  },
  vite: {
    build: {
      minify: true,
      sourcemap: true,
      target: 'esnext',
      minifier: 'terser',
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    optimizeDeps: {
      include: ['astro:assets'],
    },
  },
});
