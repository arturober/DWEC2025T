import { Directive, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[setColor]',
  host: {
    '[style.backgroundColor]': 'bgColor()',
    '[style.color]': 'textColor()',
    '(click)': 'toggleTextColor()',
  }
})
export class SetColor {
  bgColor = input('yellow');
  textColor = signal('black');

  toggleTextColor() {
    this.textColor.update(c => c === 'black' ? 'white' : 'black');
  }
}
