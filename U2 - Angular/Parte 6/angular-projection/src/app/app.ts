import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCard } from './my-card/my-card';
import { LoadButton } from './load-button/load-button';
import { MyModal } from './my-modal/my-modal';

@Component({
  selector: 'app-root',
  imports: [LoadButton, MyCard, MyModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly loading = signal(false);
  protected readonly showModal = signal(false);

  constructor() {
    effect(() => {
      if(this.loading()) {
        setTimeout(() => {
          this.loading.set(false);
        }, 3000);
      }
    })
  }
}
