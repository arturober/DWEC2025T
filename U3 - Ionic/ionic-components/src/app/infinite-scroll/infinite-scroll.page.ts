import { Component, OnInit, signal, viewChild } from '@angular/core';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  standalone: true,
  imports: [
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonList,
    IonContent,
    IonItem,
  ],
})
export class InfiniteScrollPage {
  items = signal<string[]>([]);
  num = 1;
  finished = false;

  infinite = viewChild(IonInfiniteScroll);

  constructor() {
    this.loadMoreItems();
  }

  loadMoreItems() {
    // Simulamos una llamada a un servicio externo con un timeout
    setTimeout(
      () => {
        const max = this.num + 20;
        const newElements: string[] = [];
        for (; this.num < max; this.num++) {
          newElements.push('Item ' + this.num);
        }
        this.items.update(items => [...items, ...newElements]);
        if (this.num >= 120) {
          this.finished = true;
        }

        this.infinite()?.complete(); // Esconder animación al terminar de cargar
      },
      this.infinite() ? 2000 : 0 // En la carga inicial no tardamos nada
    );
  }
}
