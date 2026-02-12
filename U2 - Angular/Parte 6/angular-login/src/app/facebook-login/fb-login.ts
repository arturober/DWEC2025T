import { isPlatformBrowser } from "@angular/common";
import { Directive, output, input, inject, PLATFORM_ID } from "@angular/core";
import { LoadFbApi } from "./load-fb-api";

@Directive({
  selector: 'button[fbLogin]',
  host: {
    '(click)': 'onClick()'
  }
})
export class FbLogin {
  loginOk = output<fb.StatusResponse>();
  loginError = output<string>();
  scopes = input.required<string[]>();

  platformId = inject(PLATFORM_ID);
  #loadService =  isPlatformBrowser(this.platformId) ? inject(LoadFbApi) : null;

  async onClick(): Promise<void> {
    try {
      const resp = await this.#loadService!.login(this.scopes().join(','));
      this.loginOk.emit(resp);
    } catch {
      this.loginError.emit('Error with Facebook login!');
    }
  }
}
