const fs = require('fs')

// Blocking synchronous way
const textIn =  fs.readFileSync('./starter/txt/input.txt', 'utf-8')
console.log(textIn);
const textOut = `this is what we know about the avocador: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt', textOut);
console.log('smit');

// Non-Blocking Asynchronous way
fs.readFile('./stater/txt/start.txt', 'utf-8', (err, data) => {
console.log(data);
} )