import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, input, numberAttribute } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { ProductsService } from '../services/products-service';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'product-detail',
  imports: [StarRating, IntlCurrencyPipe, DatePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  id = input.required<number, string>({ transform: numberAttribute });

  #router = inject(Router);
  #title = inject(Title);
  #productsService = inject(ProductsService);
  productResource = this.#productsService.getProductIdResource(this.id);
  product = computed(() => this.productResource.value()?.product);

  constructor() {
    effect(() => {
      if(this.productResource.hasValue()) {
        this.#title.setTitle(`${this.product()?.description} | Angular Products`)
      } else if(this.productResource.error()) {
        alert('Error al cargar el producto');
        this.#router.navigate(['/products']);
      }
    });
  }

  goBack() {
    this.#router.navigate(['/products']);
  }

}
