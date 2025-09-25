const nombres = [
  "Pepe",
  "Juan",
  "Ana",
  "Rigoberto",
  "Antonio",
  "María",
  "Marcos",
  "Alberto",
  "Sandra",
  "Andrés",
];
// Array con los 2 nombres más largos que empiecen por A en mayúsculas
const nombresA = nombres
  .toSorted((n1, n2) => n2.length - n1.length)
  .values()
  .filter((n) => n.startsWith("A"))
  .take(2)
  .map(v => v.toUpperCase())
  .toArray();
  
console.log(nombresA);