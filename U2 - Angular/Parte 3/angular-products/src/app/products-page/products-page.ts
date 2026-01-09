import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'products-page',
  imports: [FormsModule, ProductItem, ProductForm],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  productsService = inject(ProductsService);

  products = signal<Product[]>([]);

  readonly showImage = signal(true);
  readonly search = signal('');

  productsFiltered = computed(() =>
    this.products().filter((p) =>
      p.description.toLocaleLowerCase().includes(this.search().toLocaleLowerCase()),
    ),
  );

  constructor() {
    this.productsService
      .getProducts()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (products) => this.products.set(products),
        error: (error) => console.log(error),
      });
  }

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
