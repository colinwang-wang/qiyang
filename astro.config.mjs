import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://colinwang-wang.github.io',
  base: '/qiyang',
  integrations: [react(), tailwind(), sitemap()],
});
