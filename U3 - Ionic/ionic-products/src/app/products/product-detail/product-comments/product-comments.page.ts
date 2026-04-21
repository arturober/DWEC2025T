import {
  Component,
  effect,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AlertController,
  IonAvatar,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
  Platform,
} from '@ionic/angular/standalone';
import { Comment } from '../../interfaces/comment';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'product-comments',
  templateUrl: './product-comments.page.html',
  styleUrls: ['./product-comments.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel,
  ],
})
export class ProductCommentsPage {
  #alertCtrl = inject(AlertController);
  #productsService = inject(ProductsService);
  #platform = inject(Platform);

  ionRefresher = viewChild.required(IonRefresher);
  id = input.required({ transform: numberAttribute });
  commentsResource = this.#productsService.getCommentsResource(this.id);
  comments = linkedSignal(() => this.commentsResource.value()?.comments);

  constructor() {
    this.#platform.resume.pipe(takeUntilDestroyed()).subscribe(
      () => this.commentsResource.reload(), // Recargamos comentarios cuando la aplicación se reactiva (resume)
    );

    effect(() => {
      if (!this.commentsResource.isLoading()) {
        this.ionRefresher().complete(); // Si estaba la animación de carga, una vez tenemos comentarios cargados, se cancela
      }
    });
  }

  ionViewWillEnter() {
    this.commentsResource.reload();
  }

  async addComment() {
    const alert = await this.#alertCtrl.create({
      header: 'New commment',
      inputs: [
        {
          name: 'comment',
          type: 'text',
          placeholder: 'Enter your comment',
        },
      ],
      buttons: [
        {
          text: 'Add',
          role: 'ok',
        },
        {
          role: 'cancel',
          text: 'Cancel',
        },
      ],
    });

    await alert.present();
    const result = await alert.onDidDismiss();

    if (result.role === 'ok') {
      this.#productsService
        .addComment(this.id(), result.data.values.comment)
        .subscribe({
          next: (comment: Comment) => {
            this.comments.update((comments) => [...comments!, comment]);
          },
          error: () => {
            console.log('Error con ' + this.id());
          },
        });
    }
  }
}
