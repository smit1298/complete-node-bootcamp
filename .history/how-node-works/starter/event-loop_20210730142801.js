const { setImmediate } = require("timers/promises");
const fs = require('fs')
setTimeout(() => {
    console.log('Timer 1 finished')
}, 0);

setImmediate(() => {
    console.log('Immediate 1 finished')
},);

fs.readFile('./how-node-works/starter/test-file.txt', () => {
    console.log('I/O finished');
})
console.log('hello from the top level code');
