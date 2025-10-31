import { ProductsDB } from "./product-db.class";

export class ProductService {
    #products = null;

    async getProductos() {
        let prodDb = await ProductsDB.getDB();
        return prodDb.getAllProducts();
    }

    async getProducto(id) {
        let prodDb = await ProductsDB.getDB();
        return prodDb.getProduct(id);
    }

    async add(product) {
        let prodDb = await ProductsDB.getDB();
        return prodDb.insertProduct(product);
    }

    async delete(id) {
        let prodDb = await ProductsDB.getDB();
        await prodDb.deleteProduct(id);
    }
}
