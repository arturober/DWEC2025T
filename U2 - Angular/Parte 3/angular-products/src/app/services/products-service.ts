import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, timeout } from 'rxjs';
import { ProductInsert, ProductsResponse, SingleProductResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #baseUrl = 'https://api.fullstackpro.es/products-example/products';
  #http = inject(HttpClient);

  getProducts() {
    return this.#http.get<ProductsResponse>(this.#baseUrl).pipe(map((res) => res.products));
  }

  changeRating(id: number, rating: number) {
    return this.#http.put<void>(`${this.#baseUrl}/${id}/rating`, { rating }).pipe(delay(4000), timeout(3000));
  }

  insertProduct(product: ProductInsert) {
    return this.#http.post<SingleProductResponse>(this.#baseUrl, product).pipe(
      map((resp) => resp.product),
    );
  }
}
