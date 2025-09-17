function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Tom"); // "Hello Tom"
sayHello(); // Hello undefined
sayHello("Peter", "Tom");

let sayHello2 = function(name) {
    console.log(`Hello ${name}`);
}

sayHello2("Pepe");

console.log(typeof sayHello); // function
console.log(typeof sayHello2); // function

let sayHello3 = sayHello;
sayHello3("Juan");

const animales = ["gato", "avestruz", "perro", "abeja", "halcón"];
const animalesA = animales.filter(function(a) { return a.startsWith("a")});
console.log(animalesA);

function filtrarA(palabra) {
    return palabra.startsWith("a");
}
const animalesA2 = animales.filter(filtrarA);
console.log(animalesA2);

const animalesA3 = animales.filter(a => a.startsWith("a"));
console.log(animalesA3);

function saluda(nombre) {
    console.log(`Hola ${nombre ?? "Anónimo"}`);
}

saluda("Héctor"); // Hola Héctor
saluda(); // Hola Anónimo
saluda(""); // Hola

function saluda2(nombre = "Anónimo") {
    console.log(`Hola ${nombre}`);
}

saluda2("Tom");
saluda2(); // Hola Anónimo
saluda2(null); // Hola null (solo para undefined)

let a = [1,2,3,4];

function cambiaArray(array) {
    array[0] = 99;
}
cambiaArray(a);
console.log(a); // [99,2,3,4]