function sumarAsync(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return Promise.reject(
      new TypeError(`Los parámetros deben ser números: a=${a}, b=${b}`)
    );
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = +a + +b;
      resolve(resultado);
    }, Math.random() * 2000 + 1000);
  });
}

Promise.all([sumarAsync(3, 7), sumarAsync(10, 20), sumarAsync(5, 6)]).then(
  (resultados) => {
    console.log("Resultados de Promise.all:", resultados);
  }
);


Promise.race([sumarAsync(3, 7), sumarAsync(10, 20), sumarAsync(5, 6)]).then(
  (primerResultado) => {
    console.log("Primer resultado de Promise.race:", primerResultado);
  }
);  

Promise.allSettled([
  sumarAsync(3, 7),
  sumarAsync(10, "veinte"),
  sumarAsync(5, 6),
]).then((resultados) => {
  console.log("Resultados de Promise.allSettled:", resultados);
}); 