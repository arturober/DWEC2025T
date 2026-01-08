import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductsResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #baseUrl = 'https://api.fullstackpro.es/products-example/products';
  #http = inject(HttpClient);

  getProducts() {
    return this.#http.get<ProductsResponse>(this.#baseUrl).pipe(map((res) => res.products));
  }
}
