// @ts-check

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages URL
  site: 'https://entreospontosbordados.github.io',
  base: '/lp-website',
  
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Usaremos nosso próprio global.css
    })
  ],
});