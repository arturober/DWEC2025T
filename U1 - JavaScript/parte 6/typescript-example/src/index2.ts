// Tipado de funciones
function suma(n1: number, n2: number): number {
  return n1 + n2;
}

const res = suma(4, 6);

console.log(res);

function operar(n1: number, n2: number, f: (n1: number, n2: number) => number) {
  console.log(f(n1, n2));
}

operar(4, 6, (n1, n2) => n1 * n2);

type Operacion = (n1: number, n2: number) => number;

function operar2(n1: number, n2: number, f: Operacion) {
    console.log(f(n1, n2));
}

operar2(4, 6, (n1, n2) => n1 * n2);

function longitud(cifra: number | string): number {
    return String(cifra).length;
}

console.log(longitud(345)); // 3
console.log(longitud("6546")); // 4
