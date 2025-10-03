import { ANONIMO } from "./constants.js";

export class Persona {
    constructor(nombre, edad) {
        this.edad = edad;
        this.nombre = nombre;
    }

    static createAnonimo() {
        return new Persona(ANONIMO, 1);
    }
}