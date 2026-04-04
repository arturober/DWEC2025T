import { CurrencyPipe } from '@angular/common';
import {
  Component,
  effect,
  inject,
  linkedSignal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ActionSheetController,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRefresher,
  IonRefresherContent,
  IonRouterLink,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  NavController,
} from '@ionic/angular/standalone';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products-service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    IonRouterLink,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
  ],
})
export class HomePage {
  #productsService = inject(ProductsService);
  #navController = inject(NavController);
  #actionSheetCtrl = inject(ActionSheetController);

  productsResource = this.#productsService.getProductsResource();
  products = linkedSignal(() =>
    this.productsResource.hasValue()
      ? this.productsResource.value().products
      : [],
  );

  ionRefresher = viewChild.required(IonRefresher);

  constructor() {
    effect(() => {
      if (!this.productsResource.isLoading()) {
        this.ionRefresher().complete(); // Paramos animación del pull to refresh
      }
    });
  }

  ionViewWillEnter() {
    this.productsResource.reload();
  }

  async showOptions(prod: Product) {
    const actSheet = await this.#actionSheetCtrl.create({
      header: prod.description,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.#productsService
              .deleteProduct(prod.id!)
              .subscribe(() =>
                this.products.update((prods) =>
                  prods.filter((p) => p !== prod),
                ),
              );
          },
        },
        {
          text: 'See details',
          icon: 'eye',
          handler: () => {
            this.#navController.navigateForward(['/products', prod.id]);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    actSheet.present();
  }
}
