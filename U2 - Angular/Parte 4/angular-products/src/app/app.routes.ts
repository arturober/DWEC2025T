import { Routes } from '@angular/router';
import { ProductDetail } from './product-detail/product-detail';
import { ProductForm } from './product-form/product-form';
import { ProductsPage } from './products-page/products-page';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsPage,
    title: 'Productos | Angular Products',
  },
  {
    path: 'products/add',
    component: ProductForm,
    title: 'Añadir producto | Angular Products',
  },
  {
    path: 'products/:id',
    component: ProductDetail,
    title: 'Detalle producto | Angular Products',
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  // Aquí podríamos cargar un página de error 404 por ejemplo
  { path: '**', redirectTo: '/products' },
];
