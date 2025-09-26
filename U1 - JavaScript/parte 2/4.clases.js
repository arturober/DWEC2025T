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

const p = new Persona("Juan", 25);
p.saluda();
console.log(p.nombre); // getter implícito
p.nombre = null; // setter implícito
console.log(p.nombre);
// p.edad = -23; // Uncaught RangeError RangeError: La edad no puede ser negativa
p.edad = 45;
console.log(p.edad);

class Rectangulo {
    #ancho;
    #alto;
    constructor(ancho, alto) {
        this.#alto = alto;
        this.#ancho = ancho;
    }

    get area() {
        return this.#alto * this.#ancho;
    }

    static cuadradoEjemplo() {
        return new Rectangulo(1,1);
    }
}

const rect = new Rectangulo(4,6);
console.log(rect.area); // 24

const cuadrado = Rectangulo.cuadradoEjemplo();
console.log(cuadrado);