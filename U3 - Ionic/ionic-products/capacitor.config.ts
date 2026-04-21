import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.damdaw.ionic.products',
  appName: 'Ionic Products',
  webDir: 'www',
  android: {
    allowMixedContent: true
  },
  plugins: {
    SystemBars: {
      "style": "DARK",
    },
  },
};

export default config;
