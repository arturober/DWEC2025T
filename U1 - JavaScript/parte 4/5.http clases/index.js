import { ProductsService } from "./products.service.js";

const URL = "https://api.fullstackpro.es/products-example/products";

const tbody = document.querySelector("#productos-table tbody");
const productoTemplate = document.getElementById("producto-template");
const formProducto = document.getElementById("form-producto");
const imgPreview = document.getElementById("imgPreview");

const productsService = new ProductsService();

async function getProductos() {
  const products = await productsService.getAll();
  products.forEach((producto) => addProducto(producto));
}

function addProducto(producto) {
  const tr = productoTemplate.content.cloneNode(true).firstElementChild;
  tr.querySelector("img").src = producto.imageUrl;
  tr.querySelector(".descripcion").textContent = producto.description;
  tr.querySelector(".precio").textContent = Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(producto.price);
  tr.querySelector(".delete").addEventListener("click", async () => {
    await productsService.delete(producto.id);
    tr.remove();
  });
  tbody.appendChild(tr);
}

formProducto.image.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.addEventListener("load", () => {
    imgPreview.src = reader.result;
  });
});

formProducto.addEventListener("submit", async (event) => {
  event.preventDefault();

  const producto = {
    description: formProducto.description.value,
    price: +formProducto.price.value,
    imageUrl: imgPreview.src,
  };

  const insertedProduct = await productsService.create(producto);
  addProducto(insertedProduct);
  formProducto.reset();
  imgPreview.src = "";
});

getProductos();
