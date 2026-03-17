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
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'lists',
    loadComponent: () => import('./lists/lists.page').then( m => m.ListsPage)
  },
  {
    path: 'forms',
    loadComponent: () => import('./forms/forms.page').then( m => m.FormsPage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'badges',
    loadComponent: () => import('./badges/badges.page').then( m => m.BadgesPage)
  },
  {
    path: 'toolbars',
    loadComponent: () => import('./toolbars/toolbars.page').then( m => m.ToolbarsPage)
  },
];
