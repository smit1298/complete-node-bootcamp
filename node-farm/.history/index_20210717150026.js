const fs = require('fs')

const textIn =  fs.readFileSync('./starter/txt/input.txt', 'utf-8')
console.log(textIn);

const textOut = `this is nwhast we know abot the avocador: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('/starter/txt/output.txt', textOut);
lo