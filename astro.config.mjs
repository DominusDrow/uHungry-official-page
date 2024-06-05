import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  output: 'server',
  build: {
    outDir: './dist',
  },
  integrations: [
    netlify()
  ],
});
