function sumarAsync(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = +a + +b;
      if (!Number.isNaN(resultado)) {
        resolve(resultado);
      } else {
        reject(
          new TypeError(`Los parámetros deben ser números: a=${a}, b=${b}`)
        );
      }
    }, 3000);
  });
}

// sumarAsync(5, 10).then((resultado) => {
//   console.log("Resultado:", resultado);
// });

// sumarAsync(5, "hola")
//   .then((resultado) => {
//     console.log("Resultado:", resultado);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

// sumarAsync(4, 8)
//   .then((resultado) => {
//     console.log("Resultado:", resultado);
//     return resultado * 2;
//   })
//   .then((nuevoResultado) => {
//     console.log("Nuevo Resultado:", nuevoResultado);
//   });

// ASí NO SE HACE (anidamiento innecesario):
// sumarAsync(6, 14).then((resultado) => {
//   console.log("Resultado intermedio:", resultado);
//   sumarAsync(resultado, 10).then((finalResultado) => {
//     console.log("Resultado final:", finalResultado);
//   });
// });

// Mejor así:
sumarAsync(6, 14)
  .then((resultado) => {
    console.log("Resultado intermedio:", resultado);
    return sumarAsync(resultado, 10);
  })
  .then((finalResultado) => {
    console.log("Resultado final:", finalResultado);
  });

console.log("Programa principal continúa...");
