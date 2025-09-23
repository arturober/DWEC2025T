let person1 = {name: "Peter", age: 21};
let person2 = {name: "Mary", age: 34};
let person3 = {name: "Louise", age: 17};

let hobbies = new Map(); // Almacenará una persona con un array de hobbies (string)
hobbies.set(person1, ["Tennis", "Computers", "Movies"]);
console.log(hobbies); // Map {Object {name: "Peter", age: 21} => ["Tennis", "Computers", "Movies"]}

hobbies.set(person2, ["Music", "Walking"]);
hobbies.set(person3, ["Boxing", "Eating", "Sleeping"]);
console.log(hobbies);

console.log(hobbies.get({name: "Peter", age: 21})); // undefined
console.log(hobbies.get(person1)); // [ 'Tennis', 'Computers', 'Movies' ]

const personas = new Map();
personas.set("Paco", 43);
personas.set("Marta", 25);
personas.set("Juan", 51);
personas.set("Ana", 17);

console.log(personas);
console.log(personas.has("Paco")); // true 
console.log(personas.has("Manuel")); // false 
console.log(personas.size); // 4

personas.delete("Ana");
console.log(personas.size); // 3

personas.set("Paco", 100);
console.log(personas.size); // 3
console.log(personas.get("Paco")); // 100 (sobrescribe)

for(let entry of personas) {
    console.log(`${entry[0]}, edad: ${entry[1]}`);
}

console.log("------------------------------");

for(let [nombre, edad] of personas) {
    console.log(`${nombre}, edad: ${edad}`);
}

console.log("------------------------------");

personas.forEach((edad, nombre) => console.log(`${nombre}, edad: ${edad}`));
