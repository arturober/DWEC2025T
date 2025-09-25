const prod = {
    nombre: "Silla",
    precio: 23,
    verDetalle() {
        console.log(`${this.nombre} - ${this.precio}€`);
    }
}

console.log(prod);
prod.verDetalle();

prod.desc = "Muy bonita";
console.log(prod);

const persona = {
    nombre: "Juan",
    edad: 24,
    telefonos: ["949394934", "254987443"],
    direccion: {
        calle: "Calle Pepe",
        numero: 24,
        ciudad: "Albacete"
    }
}

persona.telefonos.push("987987987")
console.log(persona);
console.log(persona.direccion.ciudad); // Albacete