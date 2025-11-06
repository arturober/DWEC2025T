// Tipado implícito
let a = "Hola"; // a es de tipo string (implícito)
a = "Adiós";
// a = 23; // Type 'number' is not assignable to type 'string'.ts(2322)

console.log(a);

// Tipado explicito
const b: number = 34;

console.log(b);

// Tipado implícito any (se comporta como JavaScript)
let c;
c = 24;
c = "Hola";
console.log(c);

// Tipando arrays
const array = []; // any[] (Array de cualquier cosa). Hay que evitarlo!
array.push(23, "Hola", true);

console.log(array);

const array2 = ["perro", "gato"]; // string[]
array2.push("Hola");

const arrayNums: number[] = [];
arrayNums.push(34);
// arrayNums.push("Hola"); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

// Tipado implícito ambiguo
const array3 = ["Hola", 43];
array3.push(34);
array3.push("Adiós");
// array3.push(true);
console.log(array3);
