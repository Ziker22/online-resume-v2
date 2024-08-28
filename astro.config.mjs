import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools, partytown()]
});