import { DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, inject, input, output } from '@angular/core';
import { Product } from '../interfaces/product';
import { IntlCurrencyPipe } from '../../shared/pipes/intl-currency-pipe';
import { StarRating } from '../../shared/star-rating/star-rating';
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { ConfirmModal } from '../../shared/modals/confirm-modal/confirm-modal';

@Component({
  selector: 'product-item',
  imports: [IntlCurrencyPipe, DatePipe, UpperCasePipe, StarRating, RouterLink],
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
  #modalService = inject(NgbModal);

  async deleteProduct() {
    const modalRef = this.#modalService.open(ConfirmModal);
    modalRef.componentInstance.title = 'Eliminar producto';
    modalRef.componentInstance.body = '¿Quieres eliminar este producto?';
    const resp = await modalRef.result.catch(() => false);
    if (!resp) return;

    this.#productsService
      .deleteProduct(this.product().id)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => this.deleted.emit());
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
