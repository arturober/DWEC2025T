let array = [150, 400, 780, 1500, 200];
let [v1, v2, v3] = array; // Asigna los tres primeros elementos del array
console.log(v3); // Imprime 780

let [,n2,,n4] = array;
console.log(n2,n4); // 400 1500

let nombres = ["Pepe", "Juan", "Ana", "Gustavo"];
let [primero, ...resto] = nombres;
console.log(primero); // Pepe
console.log(resto); // ['Juan', 'Ana', 'Gustavo']

function imprimeRect(rect) {
    console.log(`Ancho: ${rect[0]}. Alto: ${rect[1]}. Área: ${rect[0] * rect[1]}`);
}

function imprimeRect2([ancho,alto]) {
    console.log(`Ancho: ${ancho}. Alto: ${alto}. Área: ${ancho * alto}`);
}

const rect = [4, 7];
imprimeRect(rect); // Ancho: 4. Alto: 7. Área: 28
imprimeRect2(rect); // Ancho: 4. Alto: 7. Área: 28