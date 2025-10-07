setTimeout(() => console.log("Hola"), 4000);
console.log("Adiós");

let num = 1;
const idInterval = setInterval(() => {
    console.log(num++);
    if(num > 10) {
        clearInterval(idInterval);
    }
}, 1000); // Imprime un número y lo incrementa cada segundo
