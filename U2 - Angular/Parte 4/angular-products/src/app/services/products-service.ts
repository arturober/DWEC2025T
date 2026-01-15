import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { delay, map, timeout } from 'rxjs';
import { ProductInsert, ProductsResponse, SingleProductResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #baseUrl = 'products';
  #http = inject(HttpClient);

  getProductsResource(search: Signal<string>) {
    return httpResource<ProductsResponse>(() => {
      const urlSearch = new URLSearchParams({ search: search() });
      return `${this.#baseUrl}?${urlSearch.toString()}`;
    });
  }

  getProductIdResource(id: Signal<number>) {
    return httpResource<SingleProductResponse>(() => `${this.#baseUrl}/${id()}`);
  }

  changeRating(id: number, rating: number) {
    return this.#http
      .put<void>(`${this.#baseUrl}/${id}/rating`, { rating })
      .pipe(delay(4000), timeout(3000));
  }

  insertProduct(product: ProductInsert) {
    return this.#http
      .post<SingleProductResponse>(this.#baseUrl, product)
      .pipe(map((resp) => resp.product));
  }

  deleteProduct(id: number) {
    return this.#http.delete<void>(`${this.#baseUrl}/${id}`);
  }
}
