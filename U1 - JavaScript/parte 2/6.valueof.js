class Figura {
    get area() {
        return 0;
    }

    valueOf() {
        return this.area;
    }
}

class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    get area() {
        return this.alto * this.ancho;
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    get area() {
        return this.radio ** 2 * Math.PI;
    }
}

const cuadrado = new Rectangulo(6,6);
const circulo = new Circulo(3);

console.log(cuadrado.area);
console.log(circulo.area);

console.log(cuadrado + circulo); // 64.27433388230814
console.log(cuadrado > circulo); // true