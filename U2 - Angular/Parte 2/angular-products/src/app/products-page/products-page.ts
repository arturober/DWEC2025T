import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';

@Component({
  selector: 'products-page',
  imports: [FormsModule, ProductItem, ProductForm],
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

  toggleImage() {
    this.showImage.update((value) => !value);
  }

  addProduct(prod: Product) {
    this.products.update(products => [...products, prod]);
  }

  deleteProduct(product: Product) {
    this.products.update(products => products.filter(p => p !== product));
  }
}
