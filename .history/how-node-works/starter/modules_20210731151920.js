console.log(arguments);
console.log(require('module').wrapper);

const C = require('./test-module-1');
const calc1 = new C();
