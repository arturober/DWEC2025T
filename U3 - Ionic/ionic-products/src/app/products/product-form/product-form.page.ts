import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar,
  ToastController,
} from '@ionic/angular/standalone';
import { Product, ProductInsert } from '../interfaces/product';
import { ProductsService } from '../services/products-service';
import { form, FormField, FormRoot, required } from '@angular/forms/signals';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
  standalone: true,
  imports: [
    FormRoot,
    FormField,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonItem,
    IonList,
    IonIcon,
    IonMenuButton,
    IonLabel,
    IonButton,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    RouterLink,
    IonInput,
  ],
})
export class ProductFormPage {
  productModel = signal({
    description: '',
    price: 0,
  });
  image = signal('');

  productForm = form(this.productModel, (schema) => {
    required(schema.description);
    required(schema.price);
  }, {
    submission: {
      action: async () => this.addProduct()
    }
  })

  #productsService = inject(ProductsService);
  #toastCtrl = inject(ToastController);
  #navController = inject(NavController);

  addProduct() {
    this.#productsService
      .addProduct({ ...this.productModel(), imageUrl: this.image() })
      .subscribe({
        next: async (prod) => {
          (
            await this.#toastCtrl.create({
              position: 'bottom',
              duration: 3000,
              message: 'Product added succesfully',
              color: 'success',
            })
          ).present();
          this.#navController.navigateRoot(['/products']);
        },
        error: async (error) =>
          (
            await this.#toastCtrl.create({
              position: 'bottom',
              duration: 3000,
              message: 'Error adding product',
            })
          ).present(),
      });
  }

  async takePhoto() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl, // Base64 (url encoded)
    });

    this.image.set(photo.dataUrl as string);
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl, // Base64 (url encoded)
    });

    this.image.set(photo.dataUrl as string);
  }
}
