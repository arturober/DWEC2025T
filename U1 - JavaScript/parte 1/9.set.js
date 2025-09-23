const frutas = new Set(["manzana", "pera", "plátano"]);
console.log(frutas);
console.log(frutas.has("manzana")); // true
console.log(frutas.has("kiwi")); // false
frutas.add("sandía");
frutas.add("manzana");
frutas.add("manzana");
frutas.add("manzana");
frutas.delete("plátano");
console.log(frutas); // { 'manzana', 'pera', 'sandía' }

frutas.forEach(f => console.log(f));

const a = [1,2,3,2,1,4,2,5,3,2,6,4,1];
const set = new Set(a);
console.log(set);
const a2 = [...set];
console.log(a2); // [ 1, 2, 3, 4, 5, 6 ]

const frutas2 = new Set(["plátano", "pera", "kiwi", "sandía"]);
console.log(frutas.intersection(frutas2)); // Set(2) { 'pera', 'sandía' }

