import { Directive, output } from '@angular/core';

@Directive({
  selector: 'input[type=file][encodeBase64]',
  host: {
    '(change)': 'changeImage($event)',
  },
})
export class EncodeBase64 {
  encoded = output<string>();

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) {
      this.encoded.emit('');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('load', () => {
      this.encoded.emit(reader.result as string);
    });
  }

}
