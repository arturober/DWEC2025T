const o = new Object();
console.log(o);
o.precio = 23;
o.nombre = "Silla";
console.log(o);
o.verDetalle = function() {
    console.log(`${this.nombre} - ${this.precio}€`);
}

o.verDetalle();
console.log(o.nombre); // Silla
console.log(o['nombre']); // Silla

// Propiedades con nombres no estándar
o['c-1'] = "H234";
o['ç`´.-*^/('] = 100;
console.log(o);
console.log(o['c-1']); // H234
