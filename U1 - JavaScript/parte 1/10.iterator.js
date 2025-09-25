const a = [23, 45, 67, 89, 12];
const iterador = a.values();

console.log(iterador.next()); // { value: 23, done: false }
console.log(iterador.next()); // { value: 45, done: false }
console.log(iterador.next()); // { value: 67, done: false }
console.log(iterador.next()); // { value: 89, done: false }
console.log(iterador.next()); // { value: 12, done: false }
console.log(iterador.next()); // { value: undefined, done: true }

const w = "Cebra";
const wIt = Iterator.from(w);
console.log(wIt.next()); // {value: 'C', done: false}
console.log(wIt.next()); // {value: 'e', done: false}
for(let l of wIt) {
    console.log(l); // b r a
}

const wIt2 = Iterator.from(w);
const a2 = [...wIt2, ",", "o", "s", "o"]; 
console.log(a2); 