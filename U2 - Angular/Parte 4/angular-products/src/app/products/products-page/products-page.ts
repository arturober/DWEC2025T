import { Component, inject, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, ProductsResponse } from '../interfaces/product';
import { ProductItem } from '../product-item/product-item';
import { ProductsService } from '../services/products-service';

@Component({
  selector: 'products-page',
  imports: [FormsModule, ProductItem],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  readonly showImage = signal(true);
  readonly search = signal('');

  productsService = inject(ProductsService);

  productsResource = this.productsService.getProductsResource(this.search);
  // products = linkedSignal(() => this.productsResource.value()?.products ?? []);
  products = linkedSignal<ProductsResponse | undefined, Product[]>({
    source: () => this.productsResource.value(),
    computation: (newVal, previous) => {
      if(!newVal) { return previous?.value ?? []; }
      return newVal.products;
    }
  });

  toggleImage() {
    this.showImage.update((value) => !value);
  }

  addProduct(prod: Product) {
    this.products.update((products) => [...products, prod]);
  }

  deleteProduct(product: Product) {
    this.products.update((products) => products.filter((p) => p !== product));
  }
}
