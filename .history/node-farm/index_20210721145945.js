const fs = require('fs')
const http = require('http')
const url = require('url')

////////////////////////// FILES
//////////////////
// Blocking synchronous way
// const textIn =  fs.readFileSync('./starter/txt/input.txt', 'utf-8')
// console.log(textIn);
// const textOut = `this is what we know about the avocador: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log('smit');

// Non-Blocking Asynchronous way
// fs.readFile('./starter/txt/start .txt', 'utf-8', (err, data1) => {
// if (err) return console.log('ERROR! 💥');

//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('your file has been written 😍');
//             })
//         })
//     });
// });
// console.log('will read file');

////////////////// SERVER  //////////////////

const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8')
const dataObject = JSON.parse(data)


const server = http.createServer((req, res) => {
    const pathName = req.url;

    // overview page
    if (pathName === '/' || pathName === '/overview') {
       
       
        res.end(tem);
    } 
    
    // product page
    else if (pathName === '/product') {
        res.end('This is the product');
    } 
    
    // API
    else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(data);
    } 
    
    // Not found
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1> page not found </h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to the request on port 8000');
});
