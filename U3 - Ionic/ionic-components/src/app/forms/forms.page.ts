import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonTextarea, IonRadioGroup, IonRadio, IonToggle, IonCheckbox, IonRange, IonSelect, IonDatetime, IonIcon, IonButton, IonLabel, IonItemDivider, IonNote, IonSelectOption, IonModal, IonDatetimeButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    JsonPipe,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonTextarea,
    IonRadioGroup,
    IonRadio,
    IonToggle,
    IonCheckbox,
    IonRange,
    IonSelect,
    IonDatetime,
    IonIcon,
    IonButton,
    IonLabel,
    IonItemDivider,
    IonNote,
    IonSelectOption,
    IonModal,
    IonDatetimeButton
],
})
export class FormsPage {
  data = {
    name: '',
    email: '',
    description: '', // textarea
    password: '',
    birth: null, // Datetime
    discount: false, // checkbox
    food: 'pizza', // radio
    premium: false, // toggle
    skill: 0,
    lessons: { // range
      lower: 8,
      upper: 15,
    },
    season: ["summer"] // Select
  };

  showPass = false;
}
