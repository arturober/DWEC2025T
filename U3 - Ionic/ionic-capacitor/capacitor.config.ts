import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'io.damdaw.capacitor',
  appName: 'Ionic Capacitor',
  webDir: 'www',
  android: {
    allowMixedContent: true,
  },
  plugins: {
    SystemBars: {
      "style": "DARK",
      "insetsHandling": "disable"
    },
    Keyboard: {
      resize: KeyboardResize.Native,
      resizeOnFullScreen: false,
    },
    EdgeToEdge: {
      "navigationBarColor": "#ffffff",
      "statusBarColor": "#0054e9"
    },
    StatusBar: {
      style: "DARK",
    },
    SocialLogin: {
      providers: {
        google: true,      // true = enabled (bundled), false = disabled (not bundled)
        facebook: true,   // Use false to reduce app size
        apple: false,      // Apple uses system APIs, no external deps
        twitter: false   // false = disabled (not bundled)
      },
      logLevel: 1 // Warnings and errors only
    }
  }
};

export default config;
