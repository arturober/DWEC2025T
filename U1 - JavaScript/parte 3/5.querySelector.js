const imagenes = document.querySelectorAll(".lista-productos .producto-imagen img");
imagenes.forEach(i => console.log(i.src));

const productos = document.querySelectorAll(".lista-productos .producto");
productos.forEach(p => {
    const nombre = p.querySelector(".producto-titulo").textContent;
    const precio = p.querySelector(".producto-precio").textContent;
    const id = p.dataset.id; // Accede al atributo data-id
    console.log(`Producto: ${nombre} (${id}) - Precio: ${precio}`);
});