import { Component, input } from '@angular/core';

@Component({
  selector: 'load-button',
  imports: [],
  templateUrl: './load-button.html',
  styleUrl: './load-button.css',
})
export class LoadButton {
  loading = input(false);
  colorClass = input('');

  getColor() {
    switch(this.colorClass()) {
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'green':
        return 'bg-green-600 hover:bg-green-700 text-white';
      case 'red':
        return 'bg-red-600 hover:bg-red-700 text-white';
      default:
        return 'bg-gray-200 hover:bg-gray-100 text-gray-700';
    }
  }
}
