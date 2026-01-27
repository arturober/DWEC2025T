import {
  Component,
  DestroyRef,
  effect,
  inject,
  linkedSignal,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgModel } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
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

  searchModel = viewChild<NgModel>('searchModel');

  productsService = inject(ProductsService);
  destroyRef = inject(DestroyRef);

  productsResource = this.productsService.getProductsResource(this.search);
  // products = linkedSignal(() => this.productsResource.value()?.products ?? []);
  products = linkedSignal<ProductsResponse | undefined, Product[]>({
    source: () => this.productsResource.value(),
    computation: (newVal, previous) => {
      if (!newVal) {
        return previous?.value ?? [];
      }
      return newVal.products;
    },
  });

  constructor() {
    effect(() => {
      this.searchModel()
        ?.valueChanges?.pipe(
          takeUntilDestroyed(this.destroyRef),
          debounceTime(600),
          distinctUntilChanged(),
        )
        .subscribe((value) => {
          this.search.set(value);
        });
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
