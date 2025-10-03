let str = "I am amazed in America";
let reg = /am/gi;
let match;
while(match = reg.exec(str)) {
    console.log("Patrón encontrado!: " + match[0] + ", en la posición: " + match.index);
}
/* Esto imprimirá:
  * Patrón encontrado!: am, en la posición: 2
  * Patrón encontrado!: am, en la posición: 5
  * Patrón encontrado!: Am, en la posición: 15 */

console.log(str.match(/am/gi)); // Imprime ["am", "am", "Am"]

const frase = "Nací el 15/08/95, mi hermano el 02/12/88. Acabé los estudios el 15/06/2015";
const regFecha = /\b\d{2}\/\d{2}\/(\d{2}|\d{4})\b/g;
console.log(frase.replace(regFecha, (fecha) => {
    const [dia, mes, anyo] = fecha.split("/");
    const date = new Date(`${mes}/${dia}/${anyo}`);
    return date.toLocaleString('es', {
        day: 'numeric', month: 'long', year: 'numeric', weekday: "long"
    });
}));