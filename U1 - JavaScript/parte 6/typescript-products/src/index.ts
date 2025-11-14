import { ProductsService } from "./clases/products.service";
import type { Product, ProductInsert } from "./interfaces/product";

const tbody = document.querySelector("#productos-table tbody")!;
const productoTemplate = document.getElementById("producto-template") as HTMLTemplateElement;
const formProducto = document.getElementById("form-producto") as HTMLFormElement;
const imgPreview = document.getElementById("imgPreview") as HTMLImageElement;

const productsService = new ProductsService();

async function getProductos() {
  const products = await productsService.getAll();
  products.forEach((producto) => addProducto(producto));
}

function addProducto(producto: Product) {
  const clone = productoTemplate.content.cloneNode(true) as DocumentFragment;
  const tr = clone.firstElementChild!;
  tr.querySelector("img")!.src = producto.imageUrl;
  tr.querySelector(".descripcion")!.textContent = producto.description;
  tr.querySelector(".precio")!.textContent = Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(producto.price);
  tr.querySelector(".delete")!.addEventListener("click", async () => {
    await productsService.delete(producto.id);
    tr.remove();
  });
  tbody.appendChild(tr);
}

const imageInput = formProducto.image as HTMLInputElement;

imageInput.addEventListener("change", () => {
  const file = imageInput.files?.[0];

  if(!file) {
    imgPreview.src = "";
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.addEventListener("load", () => {
    imgPreview.src = reader.result as string;
  });
});

formProducto.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(formProducto);

  const producto: ProductInsert = {
    description: formData.get("description") as string,
    price: +(formData.get("price") as string),
    imageUrl: imgPreview.src,
  };

  const insertedProduct = await productsService.create(producto);
  addProducto(insertedProduct);
  formProducto.reset();
  imgPreview.src = "";
});

getProductos().catch(console.error);
