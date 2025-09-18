const a = new Array(12);
console.log(a); // [ <12 empty items> ]

const a2 = new Array(1,2,3,4);
console.log(a2); // [1,2,3,4]

const a3 = [12];
console.log(a3); // [12]

const animales = ["gato", "ardilla", "conejo", "caballo", "cebra"];
for(let i in animales) {
    console.log(`${i}: ${animales[i]}`);
}

for(let a of animales) {
    console.log(a);
}

for(let l of animales[2]) {
    console.log(l);
}

console.log(Array.from(animales[2])); // [ 'c', 'o', 'n', 'e', 'j', 'o' ]

let  a1 = ["a", "b", "c"];
let  b1 = ["d", "e", "f"];
let  c1 = a1.concat(b1, "g", "h");
console.log(c1); // [ 'a', 'b', 'c','d', 'e', 'f', 'g', 'h']

let c2 = [...a1, ...b1, "g", "h"];
console.log(c2); // [ 'a', 'b', 'c','d', 'e', 'f', 'g', 'h']

let  letras = ["a", "b", "c", "d", "e", "f"];
console.log(letras.toSpliced(2, 2)); // [ 'a', 'b', 'e', 'f' ]
console.log(letras.toSpliced(2, 0, "-")); // ["a", "b", "-", "c", "d", "e", "f"]
console.log(letras.toSpliced(3, 2, "D", "E")); // [ 'a', 'b', 'c', 'D', 'E', 'f' ]