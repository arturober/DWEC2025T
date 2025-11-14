import { SERVER } from "../constants";
import type {
  ProductsResponse,
  SingleProductResponse,
  Product,
  ProductInsert,
} from "../interfaces/product";
import { Http } from "./http.class";

export class ProductsService {
  #http = new Http();
  #endpoint = `${SERVER}/products`;

  async getAll(): Promise<Product[]> {
    const resp = await this.#http.get<ProductsResponse>(this.#endpoint);
    return resp.products;
  }

  async getById(id: number) {
    const resp = await this.#http.get<SingleProductResponse>(
      `${this.#endpoint}/${id}`
    );
    return resp.product;
  }

  async create(product: ProductInsert) {
    const resp = await this.#http.post<SingleProductResponse, ProductInsert>(
      this.#endpoint,
      product
    );
    return resp.product;
  }

  async update(id: number, product: Product) {
    const resp = await this.#http.put<SingleProductResponse, Product>(
      `${this.#endpoint}/${id}`,
      product
    );
    return resp.product;
  }

  delete(id: number) {
    return this.#http.delete<void>(`${this.#endpoint}/${id}`);
  }
}
