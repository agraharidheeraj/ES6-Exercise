// rest_parameter.js
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(sum(1, 2, 3, 4)); 
