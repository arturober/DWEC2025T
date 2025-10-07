const titulos = document.getElementsByClassName("producto-titulo");
console.log(titulos);
Array.from(titulos).forEach(t => console.log(t.textContent));

const lista = document.querySelector(".lista-productos");
console.log(lista);
console.log(lista.firstChild);
console.log(lista.firstElementChild);
console.log(lista.children);
console.log(lista.childNodes);

console.log(lista.previousElementSibling.textContent); // Nuestros Productos