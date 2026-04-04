import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AlertController,
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonToolbar,
  NavController,
} from '@ionic/angular/standalone';
import { ProductDetailPage } from '../product-detail.page';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonCardSubtitle,
    IonItem,
    IonAvatar,
    IonLabel,
    IonButton,
  ],
})
export class ProductInfoPage {
  product = inject(ProductDetailPage).product; // Obtenemos signal de la página padre

  #alertCtrl = inject(AlertController);
  #productsService = inject(ProductsService);
  #nav = inject(NavController);

  async delete() {
    const alert = await this.#alertCtrl.create({
      header: 'Delete product',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.#productsService
              .deleteProduct(this.product()!.id!)
              .subscribe(() => this.#nav.navigateBack(['/products']));
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    alert.present();
  }
}
