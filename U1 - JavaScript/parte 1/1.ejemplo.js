// var hola = "Hola";
// console.log(hola);
// console.log(window.hola);

// let addEventListener = 123;

// window.addEventListener('load', e => {
//     console.log("HOLA");
// });

// var innerWidth = "Pepe";

// console.log(window.innerWidth);
// console.log(innerWidth);

const div = document.getElementById("div");

for (let i = 1; i <= 10; i++) {
  const p = document.createElement("p");
  p.textContent = `Párrafo ${i}`;
  div.append(p);

  p.addEventListener("click", () => console.log(`Párrafo ${i}`));
}

/************************************
 * Operador de Coalescencia Nula (??)
 ************************************/

function hola(nombre) {
  console.log(`Hola ${nombre || "Anónimo"}`);
}

hola("Pepe");
hola();
hola(null);
hola("");
hola(0);

console.log("OPERADOR ??");

function hola2(nombre) {
  console.log(`Hola ${nombre ?? "Anónimo"}`);
}

hola2("Pepe");
hola2();
hola2(null);
hola2("");
hola2(0);

console.log(typeof hola); // function
const saluda = hola;
saluda("Juan"); // Hola Juan

const animalesA = ["ardilla", "conejo", "perro", "avispa", "gato"]
    .filter(function(v) { return v.startsWith('a') });
console.log(animalesA);

const animalesA2 = ["ardilla", "conejo", "perro", "avispa", "gato"]
    .filter(v => v.startsWith('a'));
    console.log(animalesA2);

