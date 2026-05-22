import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';
import astroLlmsTxt from '@4hse/astro-llms-txt';

export default defineConfig({
  integrations: [
    tailwind(),
    pagefind(),
    astroLlmsTxt({
      title: '博幼 AI Agent 課程',
      description: '為博幼基金會課輔老師與社工設計的 AI Agent 實作培訓課程',
      docSet: [
        {
          title: '完整課程內容',
          description: '包含六堂課教案、工作坊實作指南、學習資源',
          url: '/llms-full.txt',
          include: ['**'],
          promote: ['/', 'lessons/*', 'resources/*'],
        },
      ],
    }),
  ],
  output: 'static',
  site: 'https://killkli.github.io',
  base: '/boyo-ai-agent-course',
  build: {
    format: 'directory',
  },
});
