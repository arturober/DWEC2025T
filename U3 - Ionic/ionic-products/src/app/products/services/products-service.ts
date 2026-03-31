import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, Signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, ProductInsert } from '../interfaces/product';
import { Comment } from '../interfaces/comment';
import {
  ProductsResponse,
  SingleProductResponse,
  SingleCommentResponse,
  CommentsResponse,
} from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #http = inject(HttpClient);

  getProductIdResource(id: Signal<number>) {
    return httpResource<SingleProductResponse>(
      () => (id() ? `products/${id()}` : undefined), // Cuando es undefined no lanza petición http
    );
  }

  getProductsResource() {
    return httpResource<ProductsResponse>(() => 'products');
  }

  addProduct(prod: ProductInsert): Observable<Product> {
    return this.#http
      .post<SingleProductResponse>('products', prod)
      .pipe(map((resp) => resp.product));
  }

  deleteProduct(idProd: number): Observable<void> {
    return this.#http.delete<void>(`products/${idProd}`);
  }

  addComment(idProd: number, comment: string): Observable<Comment> {
    return this.#http
      .post<SingleCommentResponse>(`products/${idProd}/comments`, {
        text: comment,
      })
      .pipe(map((resp) => resp.comment));
  }

  getCommentsResource(id: Signal<number>) {
    return httpResource<CommentsResponse>(
      () => (id() ? `products/${id()}/comments` : undefined), // Cuando es undefined no lanza petición http
    );
  }
}
