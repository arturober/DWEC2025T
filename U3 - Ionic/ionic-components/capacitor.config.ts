import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.damdaw.componentes',
  appName: 'Ionic Components',
  webDir: 'www',
  android: {
    allowMixedContent: true
  },
  plugins: {
    StatusBar: {
      style: "DARK",
    }
  }
};

export default config;
