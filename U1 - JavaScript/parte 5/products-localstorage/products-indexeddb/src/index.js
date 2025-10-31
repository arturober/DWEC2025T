import { ProductService } from "./product-service.class";

const tbody = document.querySelector("#tabla tbody");
const template = document.querySelector("#productTemplate");
const form = document.getElementById("productForm");
const imgPreview = document.getElementById("imgPreview");

const productosService = new ProductService();

function addProduct(product) {
  const tr = template.content.cloneNode(true).firstElementChild;
  const tdAvailable = tr.querySelector(".available");
  const tdPrice = tr.querySelector(".price");
  const img = tr.querySelector("img");
  const tdDesc = tr.querySelector(".description");
  const btnBorrar = tr.querySelector(".borrar");

  img.src = product.imageUrl;
  tdDesc.textContent = product.description;
  tdAvailable.textContent = new Date(product.available).toLocaleDateString();
  tdPrice.textContent = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  btnBorrar.addEventListener("click", async () => {
    await productosService.delete(product);
    tr.remove();
  });

  tbody.append(tr);
}

async function file2Base64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", () => {
      resolve(fileReader.result);
    });

    fileReader.addEventListener("error", (e) => {
      reject(e);
    });
  });
}

async function getProducts() {
  const products = await productosService.getProductos();
  products.forEach(addProduct);
}

form.image.addEventListener("change", async (e) => {
  const file = e.target.files[0]; // Archivo seleccionado
  if (!file) {
    imgPreview.src = "";
    return;
  }

  imgPreview.src = await file2Base64(file);
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const producto = {
    description: form.description.value,
    price: parseFloat(form.price.value),
    available: form.available.value,
    imageUrl: imgPreview.src,
  };

  try {
    const id = await productosService.add(producto);
    const productoInsert = await productosService.getProducto(id);
    console.log(productoInsert);
    addProduct(productoInsert);

    form.reset();
    imgPreview.src = "";
  } catch (error) {
    alert(error);
  }
});

getProducts();
