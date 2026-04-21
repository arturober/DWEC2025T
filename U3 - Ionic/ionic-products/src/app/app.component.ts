import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform, IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterLink, IonRouterOutlet, IonSplitPane, IonAvatar, IonImg, IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { User } from './auth/interfaces/user';
import {
  home,
  logIn,
  documentText,
  checkmarkCircle,
  images,
  camera,
  arrowUndoCircle,
  add,
  eye,
  menu,
  trash,
  close,
  exit,
  informationCircle,
  chatboxEllipses,
} from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { AuthService } from './auth/services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonRouterLink,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonAvatar,
    IonImg,
    IonHeader,
    IonToolbar
],
})
export class AppComponent {
  #authService = inject(AuthService);
  #platform = inject(Platform);
  #navController = inject(NavController);

  userResource = this.#authService.getProfile();
  user = computed(() =>
    this.userResource.hasValue() ? this.userResource.value().user : undefined,
  );

  public appPages = [
    { title: 'Home', url: '/products', icon: 'home' },
    { title: 'Add product', url: '/products/add', icon: 'add' },
  ];
  constructor() {
    addIcons({
      home,
      logIn,
      documentText,
      checkmarkCircle,
      images,
      camera,
      arrowUndoCircle,
      add,
      menu,
      trash,
      eye,
      close,
      exit,
      informationCircle,
      chatboxEllipses,
    });

    this.initializeApp();
  }

  async initializeApp() {
    if (this.#platform.is('capacitor')) {
      await this.#platform.ready();
      SplashScreen.hide();
    }
  }

  async logout() {
    await this.#authService.logout();
    this.#navController.navigateRoot(['/auth/login']);
  }
}
