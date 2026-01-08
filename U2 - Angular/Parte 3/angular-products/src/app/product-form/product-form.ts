import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64 } from '../directives/encode-base64';
import { Product, ProductInsert } from '../interfaces/product';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64],
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

  addProduct(form: NgForm) {
    const prod = { ...this.newProduct } as Product;
    prod.id = this.nextId++;
    prod.rating = 0;
    this.add.emit(prod);
    form.resetForm();
    this.newProduct.imageUrl = '';
  }
}
