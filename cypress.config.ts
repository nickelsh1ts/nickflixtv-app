import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'ip2fwk',
  e2e: {
    baseUrl: 'http://localhost:3000',
    // experimentalSessionAndOrigin: true,
  },
  env: {
    ADMIN_EMAIL: 'admin@nickelsh1ts.dev',
    ADMIN_PASSWORD: 'test1234',
    USER_EMAIL: 'friend@nickelsh1ts.dev',
    USER_PASSWORD: 'test1234',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
});
