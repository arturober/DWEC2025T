class Persona {
    #nombre;
    #edad;

    constructor(nombre,edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    saluda() {
        console.log(`Hola, soy ${this.nombre} (${this.edad})`);
    }

    toString() {
        return `${this.nombre} (${this.edad})`;
    }

    // valueOf() {
    //     return this.edad;
    // }
}

class Usuario extends Persona {
    #password;
    constructor(nombre, edad, password) {
        super(nombre, edad);
        this.#password = password;
    }

    get password() {
        return this.#password;
    }

    saluda() {
        super.saluda();
        console.log(`Mi password es: ${this.password}`);
    }
}

const usuario = new Usuario("Pepito", 24, "123456");
console.log(usuario);
console.log(usuario.nombre);

const persona = new Persona("Juan", 43);

persona.saluda();
usuario.saluda();

console.log(`Usuario: ${usuario}`);

console.log(usuario < persona); // true (24 < 43)
console.log(usuario + persona); // 67
console.log(usuario - 15); // 9