import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonList, IonItem, IonIcon, IonLabel, IonListHeader, IonAvatar, IonItemOptions, IonItemSliding, IonItemOption]
})
export class ListsPage {
  itemList = ['Sliding 1', 'Sliding 2', 'Sliding 3'];

  close(slidingItem: IonItemSliding) {
    slidingItem.close();
  }

  showRightOptions(slidingItem: IonItemSliding) {
    slidingItem.open('end');
  }

  showLeftOptions(slidingItem: IonItemSliding) {
    slidingItem.open('start');
  }
}
