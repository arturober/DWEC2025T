let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums.length); // 7
nums.length = 4;
console.log(nums); // [ 1, 2, 3, 4 ] (Deletes last 3)

console.log(typeof nums); // object
console.log(nums instanceof Array); // true

for (let i in nums) {
  console.log(`${i}: ${nums[i]}`);
}

for (let n of nums) {
  console.log(n);
}

let str = "abcdefg";

for (let letter of str) {
  if (letter.match(/^[aeiou]$/)) {
    console.log(letter + " es una vocal");
  } else {
    console.log(letter + " es una consonante");
  }
}

/** Convertir iterable a array */
const perro = "perro";
const perroA = Array.from(perro);
console.log(perroA); // [ 'p', 'e', 'r', 'r', 'o' ]
const perroA2 = [...perro];
console.log(perroA2);

// Concatenar Arrays
let a = ["a", "b", "c"];
let b = ["d", "e", "f"];
let c = a.concat(b, "g", "h");
console.log(c); // Imprime ["a", "b", "c", "d", "e", "f", "g", "h"]
console.log(a); // Imprime ["a", "b", "c"] . El array original no ha sido modificado

let c2 = [...a, ...b, "g", "h"];
console.log(c2); // Imprime ["a", "b", "c", "d", "e", "f", "g", "h"]

// Subarray
let sub = c2.slice(4, 7);
console.log(sub); // [ 'e', 'f', 'g' ]

// Modificaciones en posiciones intermedias

let nombres = ["Pepe", "Juan", "Marta", "Ana", "David"];
console.log(nombres.toSpliced(2, 1)); // [ 'Pepe', 'Juan', 'Ana', 'David' ]
console.log(nombres.toSpliced(2, 0, "Paco")); // [ 'Pepe', 'Juan', 'Paco', 'Marta', 'Ana', 'David' ]
console.log(nombres.toSpliced(1, 2, "Pedro", "María")); // [ 'Pepe', 'Pedro', 'María', 'Ana', 'David' ]

const nombreP = nombres
  .toSpliced(1, 2, "Pedro", "María")
  .filter((n) => n.startsWith("P"))
  .concat("Perico");

console.log(nombreP); // [ 'Pepe', 'Pedro', 'Perico' ]
