// @ts-check

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // TODO: Substituir pela URL real do domínio em produção
  site: 'https://artembordados.com.br',
  
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Usaremos nosso próprio global.css
    })
  ],
});