// spread_syntax.js
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

const numbersArray = [1, 2, 3, 4];
console.log(sum(...numbersArray));
