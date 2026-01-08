import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../interfaces/product';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'product-item',
  imports: [IntlCurrencyPipe, DatePipe, UpperCasePipe, StarRating],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input.required<Product>();
  showImage = input(true);

  deleted = output<void>();

  deleteProduct() {
    this.deleted.emit();
  }
}
