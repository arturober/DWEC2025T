import { ChangeDetectorRef, Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product, ProductInsert } from '../interfaces/product';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';

@Component({
  selector: 'products-page',
  imports: [FormsModule, IntlCurrencyPipe, DatePipe, UpperCasePipe],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  products = signal<Product[]>([
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: '/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: '/motherboard.jpg',
      rating: 4,
    },
    {
      id: 3,
      description: 'RAM DDR5 16GB',
      available: '2024-02-14',
      price: 200,
      imageUrl: '/ram.jpg',
      rating: 3,
    },
    {
      id: 4,
      description: 'Hard disk 500GB',
      available: '2013-12-04',
      price: 25.95,
      imageUrl: '/hdd.jpg',
      rating: 2,
    },
  ]);

  readonly showImage = signal(true);
  readonly search = signal('');

  productsFiltered = computed(() =>
    this.products().filter((p) =>
      p.description.toLocaleLowerCase().includes(this.search().toLocaleLowerCase()),
    ),
  );

  newProduct: ProductInsert = {
    description: '',
    available: '',
    imageUrl: '',
    price: 0,
  };
  nextId = 5;

  #changeDetector = inject(ChangeDetectorRef); // Necessary in new Angular zoneless apps

  toggleImage() {
    this.showImage.update((value) => !value);
  }

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
    this.products.update(products => [...products, prod]);
    form.resetForm();
    this.newProduct.imageUrl = '';
  }
}
