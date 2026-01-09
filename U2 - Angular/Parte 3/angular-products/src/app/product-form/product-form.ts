import { Component, DestroyRef, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64 } from '../directives/encode-base64';
import { Product, ProductInsert } from '../interfaces/product';
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  add = output<Product>();

  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);

  newProduct: ProductInsert = {
    description: '',
    available: '',
    imageUrl: '',
    price: 0,
  };

  addProduct(form: NgForm) {
    this.#productsService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((prod) => {
        this.add.emit(prod);
        form.resetForm();
        this.newProduct.imageUrl = '';
      });
  }
}
