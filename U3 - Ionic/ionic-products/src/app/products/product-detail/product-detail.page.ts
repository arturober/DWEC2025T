import {
  Component,
  computed,
  inject,
  input,
  numberAttribute,
} from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ProductsService } from '../services/products-service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  ],
})
export class ProductDetailPage {
  #productsService = inject(ProductsService);
  id = input.required({ transform: numberAttribute });
  productResource = this.#productsService.getProductIdResource(this.id);
  product = computed(() =>
    this.productResource.hasValue()
      ? this.productResource.value().product
      : null,
  );
}
