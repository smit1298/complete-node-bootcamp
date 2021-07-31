const fs = require('fs');
const crypto = require('crypto')

setTimeout(() => {
    console.log('Timer 1 finished')
}, 0);

setImmediate(() => {
    console.log('Immediate 1 finished')
},);

fs.readFile('./starter/test-file.txt', () => {
    console.log('I/O finished');
    console.log('============');

    setTimeout(() => {
        console.log('Timer 2 finished')
    }, 0);
    setTimeout(() => {
        console.log('Timer 3 finished')
    }, 3000);
    setImmediate(() => {
        console.log('Immediate 2 finished')
    },);

    process.nextTick(() => {
        console.log('process.nextTick')
    }, )
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha' )
console.log('hello from the top level code');