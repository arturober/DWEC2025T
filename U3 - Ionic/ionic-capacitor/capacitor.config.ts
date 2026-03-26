import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.damdaw.capacitor',
  appName: 'Ionic Capacitor',
  webDir: 'www',
  android: {
    allowMixedContent: true
  },
  plugins: {
    SystemBars: {
      "style": "DARK",
      "insetsHandling": "disable"
    },
    Keyboard: {
      "resizeOnFullScreen": false
    },
    EdgeToEdge: {
      "navigationBarColor": "#ffffff",
      "statusBarColor": "#0054e9"
    },
    StatusBar: {
      style: "DARK",
    }
  }
};

export default config;
