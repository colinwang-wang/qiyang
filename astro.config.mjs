import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://colinwang-wang.github.io' : 'https://www.sz-qy.com.cn',
  base: isGitHubPages ? '/qiyang' : '/',
  integrations: [react(), tailwind(), sitemap()],
});
