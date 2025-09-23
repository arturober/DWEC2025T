function imprimirUsuario(nombre, ...lengucajes) {
    console.log(nombre + " sabe " + lenguajes.length + " lenguajes: " + lenguajes.join(" - "));
}

// Imprime "Pedro sabe 3 lenguajes: Java - C# - Python"
imprimirUsuario("Pedro", "Java", "C#", "Python");
// Imprime "María sabe 5 lenguajes: JavaScript - Angular - PHP - HTML - CSS"
imprimirUsuario("María", "JavaScript", "Angular", "PHP", "HTML", "CSS");

imprimirUsuario("Juan");