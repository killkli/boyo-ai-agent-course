import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://killkli.github.io',
  base: '/boyo-ai-agent-course',
  build: {
    format: 'directory',
  },
});
