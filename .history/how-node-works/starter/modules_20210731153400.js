console.log(arguments);
console.log(require('module').wrapper);

const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));


// exports
const calc2 = require('./test-module-2');
console.log(calc2.add(3, 5));
console.log(calc2.multiply(3, 5));
