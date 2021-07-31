// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));


// exports
const{multiply, add,divide} = require('./test-module-2');
console.log(add(3, 5));
console.log(multiply(3, 5));


// caching
require('./t')