import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64 } from '../../shared/directives/encode-base64';
import { CanDeactivateComponent } from '../../shared/guards/leave-page-guard';
import { ProductsService } from '../services/products-service';
import { minDateValidator } from '../../shared/validators/min-date.validator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'product-form',
  imports: [ReactiveFormsModule, EncodeBase64, DatePipe],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements CanDeactivateComponent {
  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);
  #fb = inject(NonNullableFormBuilder);

  saved = false;
  today = new Date().toISOString().split('T')[0];

  productForm = this.#fb.group({
    description: ['', [Validators.required, Validators.minLength(5)]],
    price: [0, [Validators.required, Validators.min(1)]],
    available: ['', [Validators.required, minDateValidator(this.today)]],
    imageUrl: ['', [Validators.required]],
  });

  imageBase64 = '';

  addProduct() {
    this.#productsService
      .insertProduct({ ...this.productForm.getRawValue(), imageUrl: this.imageBase64 })
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.saved = true;
        this.#router.navigate(['/products']);
      });
  }

  canDeactivate() {
    return this.saved || this.productForm.pristine || confirm('¿Estás seguro de que quieres salir?');
  }

  getValidationClasses(model: FormControl) {
    return {
      'is-valid': model.touched && model.valid,
      'is-invalid': model.touched && !model.valid,
    };
  }
}
