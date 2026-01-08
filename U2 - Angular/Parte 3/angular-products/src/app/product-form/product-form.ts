import { ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product, ProductInsert } from '../interfaces/product';

@Component({
  selector: 'product-form',
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  add = output<Product>();

  newProduct: ProductInsert = {
    description: '',
    available: '',
    imageUrl: '',
    price: 0,
  };
  nextId = 5;

  #changeDetector = inject(ChangeDetectorRef); // Necessary in new Angular zoneless apps

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('load', () => {
      this.newProduct.imageUrl = reader.result as string;
      this.#changeDetector.markForCheck(); // Necessary in new Angular zoneless apps
    });
  }

  addProduct(form: NgForm) {
    const prod = { ...this.newProduct } as Product;
    prod.id = this.nextId++;
    prod.rating = 0;
    this.add.emit(prod);
    form.resetForm();
    this.newProduct.imageUrl = '';
  }
}
