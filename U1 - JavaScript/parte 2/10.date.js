const ahora = new Date();
console.log(ahora);
console.log(ahora.toLocaleString());
console.log(ahora.toLocaleString("es", { dateStyle: "full" }));
console.log(
  ahora.toLocaleString("es", {
    year: "numeric",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    hour12: true,
    minute: "2-digit",
    dayPeriod: "long"
  })
);
