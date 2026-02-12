import { Component, signal } from '@angular/core';
import { GoogleLogin } from './google-login/google-login';
import { FbLogin } from './facebook-login/fb-login';

@Component({
  selector: 'app-root',
  imports: [GoogleLogin, FbLogin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loggedGoogle(resp: google.accounts.id.CredentialResponse) {
    // Envia esto tu API
    console.log(resp.credential);
  }

  loggedFacebook(resp: fb.StatusResponse) {
    // Envía esto a tu API
    console.log(resp.authResponse.accessToken);
  }

  showError(error: any) {
    console.error(error);
  }
}
