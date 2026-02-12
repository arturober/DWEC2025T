import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './shared/interceptors/base-url-interceptor';
import { provideSignalFormsConfig } from '@angular/forms/signals';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideSweetAlert2 } from '@sweetalert2/ngx-sweetalert2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([baseUrlInterceptor]), withFetch()),
    provideSignalFormsConfig({
      classes: {
        'is-valid': ({ state }) => state().touched() && state().valid(),
        'is-invalid': ({ state }) => state().touched() && state().invalid(),
      },
    }),
    provideClientHydration(withEventReplay()),
    provideSweetAlert2({
      // Optional configuration
      fireOnInit: false,
      dismissOnDestroy: true,
    }),
  ],
};
