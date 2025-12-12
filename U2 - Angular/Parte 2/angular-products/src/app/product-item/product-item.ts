import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-item',
  imports: [IntlCurrencyPipe, DatePipe, UpperCasePipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input.required<Product>();
  showImage = input(true);
}
