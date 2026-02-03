import { Component, model } from '@angular/core';

@Component({
  selector: 'my-modal',
  imports: [],
  templateUrl: './my-modal.html',
  styleUrl: './my-modal.css',
})
export class MyModal {
  show = model(false);
}
