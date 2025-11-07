interface Saluda {
  saluda: () => void;
  hora: number;
}

class Persona implements Saluda {
  nombre: string;
  edad: number;
  hora: number; // La interfaz también obliga a implementar atributos

  constructor(nombre: string, edad: number, hora = 0) {
    this.edad = edad;
    this.nombre = nombre;
    this.hora = hora;
  }

  saluda() {
    console.log("Hola, soy " + this.nombre);
  }
}

const p = new Persona("Juan", 34);
console.log(`${p.nombre} - ${p.edad}`); // Juan - 34
