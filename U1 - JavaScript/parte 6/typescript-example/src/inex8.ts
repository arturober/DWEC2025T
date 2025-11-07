function saluda(nombre?: string) {
    if(!nombre) {
        console.log("No sé quién eres");
    } else {
        console.log(`Hola ${nombre}`);
    }
}

saluda(); // OK
saluda("Pepe"); // OK