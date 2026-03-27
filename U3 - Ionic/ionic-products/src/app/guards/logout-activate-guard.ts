import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../auth/services/auth-service';

export const logoutActivateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(AuthService)
    .isLogged()
    .pipe(map((logged) => !logged || router.createUrlTree(['/products'])));
};
