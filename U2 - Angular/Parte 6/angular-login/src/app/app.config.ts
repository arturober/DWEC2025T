import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideGoogleId } from './google-login/google-login.config';
import { provideFacebookId } from './facebook-login/facebook-login.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideGoogleId('389388754773-5jflblnhhm4qfmk8mf0egdu5die7epda.apps.googleusercontent.com'),
    provideFacebookId('1345239983944190', 'v24.0')
  ]
};
