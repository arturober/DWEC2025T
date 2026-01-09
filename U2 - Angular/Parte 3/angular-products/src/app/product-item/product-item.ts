import { DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, inject, input, output } from '@angular/core';
import { Product } from '../interfaces/product';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { StarRating } from '../star-rating/star-rating';
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #changeDetector = inject(ChangeDetectorRef);

  deleteProduct() {
    this.deleted.emit();
  }

  changeRating(rating: number) {
    const oldRating = this.product().rating;
    this.product().rating = rating;
    this.#productsService
      .changeRating(this.product().id, rating)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        error: () => {
          this.product().rating = oldRating;
          this.#changeDetector.markForCheck();
        },
      });
  }
}
