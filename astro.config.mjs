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
  image: {
    service: {
       entrypoint: 'astro/assets/services/sharp',
       config: {
         limitInputPixels: false,
      },
      options: {
        formats: ['jpeg', 'png', 'webp']
      }
     },
  },
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
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    optimizeDeps: {
      include: ['astro:assets'],
    },
    experimental: {
      minify: true,
    },
  },
});
