import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'buttons',
    pathMatch: 'full',
  },
  {
    path: 'buttons',
    loadComponent: () => import('./buttons/buttons.page').then( m => m.ButtonsPage)
  },
];
