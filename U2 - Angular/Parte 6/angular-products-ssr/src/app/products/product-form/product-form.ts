import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { form, FormField, min, minLength, required } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { EncodeBase64 } from '../../shared/directives/encode-base64';
import { CanDeactivateComponent } from '../../shared/guards/leave-page-guard';
import { maxSize } from '../../shared/validators/max-size.validator';
import { minDate } from '../../shared/validators/min-date.validator';
import { ProductsService } from '../services/products-service';
import { fileType } from '../../shared/validators/file-type.validator';

@Component({
  selector: 'product-form',
  imports: [FormField, EncodeBase64],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements CanDeactivateComponent {
  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);

  saved = false;

  newProduct = signal({
    description: '',
    available: '',
    imageUrl: '',
    price: 0,
  });

  productForm = form(this.newProduct, (schema) => {
    required(schema.description, { message: 'Description cannot be empty' });
    required(schema.available, { message: 'Available date cannot be empty' });
    required(schema.imageUrl, { message: 'Image cannot be empty' });
    required(schema.price, { message: 'Price cannot be empty' });
    minLength(schema.description, 5, {
      message: (context) =>
        `You must enter at least ${5 - context.value().length} characters more`,
    });
    min(schema.price, 1, { message: 'Price must be greater than 0' });
    minDate(schema.available, new Date().toISOString().split('T')[0]);
    maxSize(schema.imageUrl, 100 * 1024);
    fileType(schema.imageUrl, 'image', { message: 'File must be an image' });
  });

  // imageField = form(signal(''));
  imgbase64 = '';

  addProduct(event: Event) {
    event.preventDefault();
    this.#productsService
      .insertProduct({...this.newProduct(), imageUrl: this.imgbase64})
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.saved = true;
        this.#router.navigate(['/products']);
      });
  }

  canDeactivate() {
    return this.saved || !this.productForm().dirty() || confirm('¿Estás seguro de que quieres salir?');
  }
}
