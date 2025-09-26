// Antes de ES2015....
// function Persona(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
// }
// Persona.prototype.saluda = function() {
//     console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años`);
// }

// ES2015+
class Persona { 
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

const p = new Persona("Pepe", 23);
p.saluda();
console.log(p);

console.log(typeof Persona); // function