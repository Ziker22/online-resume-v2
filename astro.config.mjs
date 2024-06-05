import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import { imageService } from '@unpic/astro/service';
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
  image: {
    service: imageService({
      fallbackService: 'vercel',
      placeholder: 'blurhash',
    }),
  },
});
