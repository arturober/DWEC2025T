const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {...obj1}; // Copia
obj2.a = 99;
console.log(obj1); // {a: 1, b: 2}

const otro = {
    b: 10,
    c: 20
}

const concatenado = {...obj1, ...otro, d: 100};
console.log(concatenado); // {a: 1, b: 10, c: 20, d: 100}