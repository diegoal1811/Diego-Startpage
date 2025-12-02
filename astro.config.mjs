// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://diegoal1811.github.io',
  base: '/Diego-Startpage',
  vite: {
    plugins: [tailwindcss()]
  }
});