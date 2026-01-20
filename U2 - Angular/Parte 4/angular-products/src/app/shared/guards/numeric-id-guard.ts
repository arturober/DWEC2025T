import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const numericIdGuard: CanActivateFn = (route) => {
  const id = +(route.paramMap.get('id') ?? 0);
  const router = inject(Router);

  if(isNaN(id) || !Number.isInteger(id) || id < 1) {
    return router.createUrlTree(['/products']);
  }
  return true;
};
