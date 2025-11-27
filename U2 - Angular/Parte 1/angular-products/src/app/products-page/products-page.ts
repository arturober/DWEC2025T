import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Product, ProductInsert } from '../interfaces/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'products-page',
  imports: [FormsModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  products: Product[] = [
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
  ];

  showImage = true;

  newProduct!: ProductInsert;
  fileName = '';
  nextId = 5;

  #changeDetector = inject(ChangeDetectorRef); // Necessary in new Angular zoneless apps

  constructor() {
    this.resetProduct();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('load', () => {
      this.newProduct.imageUrl = reader.result as string;
      this.#changeDetector.markForCheck(); // Necessary in new Angular zoneless apps
    });
  }

  addProduct() {
    const prod = this.newProduct as Product;
    prod.id = this.nextId++;
    prod.rating = 0;
    this.products.push(prod);
    this.resetProduct();
  }

  private resetProduct() {
    this.newProduct = {
      description: '',
      available: '',
      imageUrl: '',
      price: 0
    };
    this.fileName = '';
  }
}
