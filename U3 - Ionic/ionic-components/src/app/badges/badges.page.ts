import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonBadge,
  IonLabel,
  IonItem,
  IonChip,
  IonIcon,
  IonFooter,
  IonTabBar,
  IonTabButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonBadge,
    IonLabel,
    IonItem,
    IonChip,
    IonIcon,
    IonFooter,
    IonTabBar,
    IonTabButton,
  ],
})
export class BadgesPage {}
