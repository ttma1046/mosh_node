const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

// Tempalte string
// ES6 / ES2015: ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

