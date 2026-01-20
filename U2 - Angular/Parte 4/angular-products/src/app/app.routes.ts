import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';

export const routes: Routes = [
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome').then((m) => m.Welcome),
    title: 'Bienvenido | Angular Products',
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then((m) => m.productsRoutes),
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome' },
];
