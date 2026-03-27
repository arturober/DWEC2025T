import { HttpClient, httpResource } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Observable, catchError, from, map, of, switchMap } from 'rxjs';
import { User, UserRegister } from '../interfaces/user';
import { TokenResponse, UserResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #logged = signal(false);

  #http = inject(HttpClient);

  get logged() {
    return this.#logged.asReadonly();
  }

  login(
    email: string,
    password: string,
    firebaseToken?: string, // En el futuro se usará para notificaciones Push
  ): Observable<void> {
    return this.#http
      .post<TokenResponse>('auth/login', {
        email,
        password,
        firebaseToken,
      })
      .pipe(
        // SwitchMap permite trabajar con funciones que devuelven observables o promesas
        switchMap(async (r) => {
          // Función async, devuelve promesa (Promise<void>)
          try {
            await Preferences.set({ key: 'fs-token', value: r.accessToken });
            this.#logged.set(true);
          } catch (e) {
            throw new Error("Can't save authentication token in storage!");
          }
        }),
      );
  }

  register(user: UserRegister): Observable<void> {
    return this.#http.post<void>('auth/register', user);
  }

  async logout(): Promise<void> {
    await Preferences.remove({ key: 'fs-token' });
    this.#logged.set(false);
  }

  isLogged(): Observable<boolean> {
    if (this.#logged()) {
      // Estamos logueados
      return of(true);
    }
    // from transforma una promesa en un observable
    return from(Preferences.get({ key: 'fs-token' })).pipe(
      switchMap((token) => {
        if (!token.value) {
          // No hay token
          return of(false);
        }

        return this.#http.get('auth/validate').pipe(
          map(() => {
            this.#logged.set(true);
            return true; // Todo correcto
          }),
          catchError(() => of(false)), // Token no válido
        );
      }),
    );
  }

  getProfile() {
    return httpResource<UserResponse>(() => this.logged() ? 'auth/profile' : undefined);
  }
}
