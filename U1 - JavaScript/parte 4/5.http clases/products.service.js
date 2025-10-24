import { Http } from "./http.class.js";

export class ProductsService {
  #http = new Http();
  #endpoint = "https://api.fullstackpro.es/products-example/products";

  async getAll() {
    const resp = await this.#http.get(this.#endpoint);
    return resp.products;
  }

  async getById(id) {
    const resp = await this.#http.get(`${this.#endpoint}/${id}`);
    return resp.product;
  }

  async create(product) {
    const resp = await this.#http.post(this.#endpoint, product);
    return resp.product;
  }

  async update(id, product) {
    const resp = await this.#http.put(`${this.#endpoint}/${id}`, product);
    return resp.product;
  }

  delete(id) {
    return this.#http.delete(`${this.#endpoint}/${id}`);
  }
}
