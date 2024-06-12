import { defineConfig } from 'cypress';
import { registerArgosTask } from '@argos-ci/cypress/task';

export default defineConfig({
  // setupNodeEvents can also be defined in "component"
  e2e: {
    baseUrl: 'https://localhost:4321',
    async setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: !!process.env.CI,
        // Set your Argos token (required only if you don't use GitHub Actions).
        token: process.env.ARGOS_TOKEN,
      });
    },
  },
});
