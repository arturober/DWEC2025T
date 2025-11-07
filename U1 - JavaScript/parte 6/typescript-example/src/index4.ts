class Persona {
    nombre: string;
    edad: number;
    #rol: string;

    constructor(nombre: string, edad: number, rol: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.#rol = rol;
    }

    get rol() {
        return this.#rol;
    }
}

const p = new Persona("Pepe", 23, "admin");
Object.entries(p).forEach(([k,v]) => console.log(`${k}: ${v}`));

