class Persona { 
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre ?? this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    set edad(edad) {
        if(edad < 0) throw RangeError("La edad no puede ser negativa");
        this.#edad = edad;
    }

    saluda() {
        console.log(`Me llamo ${this.#nombre} y tengo ${this.#edad} años`);
    }
}

function muestraInfoPersona({nombre, edad}) {
    console.log(`Nombre: ${nombre}. Edad: ${edad}`);
}

const p = new Persona("Marta", 42);
muestraInfoPersona(p);

const producto = {
    id: 36,
    nombre: "Silla",
    precio: 25,
    descripcion: "Resistente",
    stock: 35
};

const {id, nombre, ...resto} = producto;
console.log(id);
console.log(nombre);
console.log(resto);