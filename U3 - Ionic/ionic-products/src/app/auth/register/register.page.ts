import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonRouterLink,
  ToastController,
  NavController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonIcon,
  IonImg,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from '@ionic/angular/standalone';
import { User, UserRegister } from '../interfaces/user';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../services/auth-service';
import {
  email,
  form,
  FormField,
  FormRoot,
  minLength,
  required,
  validate,
} from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    FormRoot,
    FormField,
    RouterLink,
    IonRouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonIcon,
    IonImg,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
  ],
})
export class RegisterPage {
  registerModel = signal({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  avatar = signal('');

  registerForm = form(this.registerModel, (schema) => {
    required(schema.email);
    required(schema.name);
    required(schema.password);
    required(schema.password2);
    email(schema.email);
    minLength(schema.password, 4);
    validate(schema.password2, ({ value, valueOf }) => {
      const pass2 = valueOf(schema.password);
      if (value() !== pass2) {
        return {
          kind: 'sameValue',
        };
      }
      return null;
    });
  }, {
    submission: {
      action: async () => this.register(),
    }
  });

  #authService = inject(AuthService);
  #toastCtrl = inject(ToastController);
  #nav = inject(NavController);

  async register() {
    console.log(this.registerModel());
    const user: UserRegister = {
      name: this.registerModel().name,
      email: this.registerModel().email,
      password: this.registerModel().password,
      avatar: this.avatar(),
    };
    this.#authService.register(user).subscribe(async () => {
      (
        await this.#toastCtrl.create({
          duration: 3000,
          position: 'bottom',
          message: 'User registered!',
        })
      ).present();
      this.#nav.navigateRoot(['/auth/login']);
    });
  }

  async takePhoto() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl, // Base64 (url encoded)
    });

    this.avatar.set(photo.dataUrl as string);
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl, // Base64 (url encoded)
    });

    this.avatar.set(photo.dataUrl as string);
  }
}
