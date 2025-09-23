let nums = [12, 32, 6, 8, 23];
console.log(nums.reduce((max, n) => Math.max(max, n))); // 32
console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 32

// Clonar array
const a1 = [1,2,3,4];
const a2 = [...a1]; // Clon
a2[0] = 99;
console.log(a1); // [1, 2, 3, 4]
console.log(a2); // [99, 2, 3, 4]

// Concatenar arrays
const l1 = ["a", "b", "c"];
const l2 = ["A", "B", "C"];
const l3 = l1.concat("-", l2);
console.log(l3); //  ['a', 'b', 'c', '-', 'A', 'B', 'C']
const l4 = [...l1, "-", ...l2];
console.log(l4); //  ['a', 'b', 'c', '-', 'A', 'B', 'C']

