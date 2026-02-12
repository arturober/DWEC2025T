import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Directive, ElementRef, inject, output, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoadGoogleApi } from './load-google-api';

@Directive({
  selector: '[googleLogin]',
})
export class GoogleLogin {
  #element = inject(ElementRef);
  platformId = inject(PLATFORM_ID);
  // Solo inyectamos el servicio y cargamos la librería si estamos en el cliente (SSR)
  #loadService = isPlatformBrowser(this.platformId) ? inject(LoadGoogleApi) : null;
  login = output<google.accounts.id.CredentialResponse>();

  constructor() {
    // Nos aseguramos que no se ejecuta en el lado del servidor si tenemos SSR activado
    afterNextRender(() =>
      this.#loadService?.setGoogleBtn(this.#element.nativeElement)
    );
    this.#loadService?.credential$
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => this.login.emit(resp));
  }

}
