import { Component } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'products-page',
  imports: [],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  products: Product[] = [];
}
