interface Direccion {
    calle: string;
    numero: number;
    cp: string;
}

interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
    telefonos: string[];
}

const personas: Persona[] = [];

personas.push({
    nombre: "Pepe",
    edad: 34,
    direccion: {
        calle: "Calle perdida",
        cp: "43244",
        numero: 4
    },
    telefonos: ["923494934", "234923484"]
})