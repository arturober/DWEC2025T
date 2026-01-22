import { DatePipe } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64 } from '../../shared/directives/encode-base64';
import { MinDate } from '../../shared/directives/min-date';
import { CanDeactivateComponent } from '../../shared/guards/leave-page-guard';
import { ProductInsert } from '../interfaces/product';
import { ProductsService } from '../services/products-service';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64, MinDate, DatePipe],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements CanDeactivateComponent {
  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);

  saved = false;
  today = new Date().toISOString().split('T')[0];

  newProduct: ProductInsert = {
    description: '',
    available: '',
    imageUrl: '',
    price: 0,
  };

  addProduct() {
    this.#productsService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.saved = true;
        this.#router.navigate(['/products']);
      });
  }

  canDeactivate() {
    return this.saved || confirm('¿Estás seguro de que quieres salir?');
  }

  getValidationClasses(model: NgModel) {
    return {
      'is-valid': model.touched && model.valid,
      'is-invalid': model.touched && !model.valid,
    };
  }
}
