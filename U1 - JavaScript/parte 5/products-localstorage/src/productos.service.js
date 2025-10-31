export class ProductosService {
  #productos = [];

  async getProductos() {
    this.#productos = JSON.parse(localStorage.productos ?? "[]");
    return this.#productos;
  }

  async add(producto) {
    this.#productos.push(producto);
    localStorage.productos = JSON.stringify(this.#productos);
    return producto;
  }

  delete(producto) {
    const pos = this.#productos.indexOf(producto);
    if (pos > -1) {
      this.#productos.splice(pos, 1);
      localStorage.productos = JSON.stringify(this.#productos);
    }    
  }
}