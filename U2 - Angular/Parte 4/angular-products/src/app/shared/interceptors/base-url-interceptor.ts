import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const url = 'https://api.fullstackpro.es/products-example/';
  return next(req.clone({
    url: `${url}${req.url}`
  }));
};
