const nums = [112, 34, 7, 26, 9, 17, 221];
console.log(nums.sort()); // [112, 17, 221, 26, 34, 7, 9]
console.log(nums.sort((n1, n2) => n1 - n2)); // [7, 9, 17, 26, 34, 112, 221]
console.log(nums.sort((n1, n2) => n2 - n1)); // [221, 112, 34, 26, 17, 9, 7]

const strs = ["perro", "gato", "abejorro", "caballo", "zorro"];
console.log(strs.sort((s1, s2) => s2.localeCompare(s1))); // ['zorro', 'perro', 'gato', 'caballo', 'abejorro']
console.log(strs.sort((s1, s2) => s1.length - s2.length)); // ['gato', 'zorro', 'perro', 'caballo', 'abejorro']
console.log("aro".localeCompare("sandia")); // -1
console.log("sandia".localeCompare("aro")); // 1

let nums2 = [1, 2, 3, 4];
console.log(nums2.with(0, 99));
console.log(nums2);

strs.forEach((s, i) => console.log(`${i}: ${s}`));

console.log(nums.every((n) => n % 2 === 0)); // false
console.log(nums.some((n) => n % 2 === 0)); // true

console.log(strs.map((s) => s[0])); // ['g', 'z', 'p', 'c', 'a']

console.log(nums.filter((n) => n % 2 === 0)); // [112, 34, 26]
// Array con las palabras de menos de 6 caracteres en mayúsculas
console.log(strs.filter((p) => p.length < 6).map((p) => p.toLocaleUpperCase())); // ['GATO', 'ZORRO', 'PERRO']

// Concatenar la primera letra de cada cadena del array strs
console.log(strs); // [ 'gato', 'zorro', 'perro', 'caballo', 'abejorro' ]
console.log(strs.reduce((acum, s) => acum + s[0], "")); // gzpca
console.log(strs.find((a) => a.startsWith("c"))); // caballo

console.log(strs.map((s) => Array.from(s)).flat());
console.log(strs.flatMap((s) => Array.from(s))); // Igual que el de arriba

const personas = [
  { nombre: "Pepe", edad: 23 },
  { nombre: "Juan", edad: 12 },
  { nombre: "Rosa", edad: 35 },
  { nombre: "Ana", edad: 15 },
];
// Devuelve la suma de las edades de las personas mayores de edad
const suma = personas
  .filter((p) => p.edad >= 18)
  .map((p) => p.edad)
  .reduce((t, e) => t + e, 0);
console.log(suma); // 58 (23 + 35)c