const fs = require('fs')

// Blocking synchronous way
// const textIn =  fs.readFileSync('./starter/txt/input.txt', 'utf-8')
// console.log(textIn);
// const textOut = `this is what we know about the avocador: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log('smit');

// Non-Blocking Asynchronous way
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('your file has been written 😍');
            })
        })
    });
});
console.log('will read file');