const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
// const replaceTemplate = require('./module/replaceTemplate')


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
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
output = output.replace(/{%IMAGE%}/g, product.image)
output = output.replace(/{%PRICE%}/g, product.price)
output = output.replace(/{%FROM%}/g, product.from)
output = output.replace(/{%NUTRIENTS%}/g, product.nutrient)
output = output.replace(/{%QUANTITY%}/g, product.quantity)
output = output.replace(/{%DESCRIPTION%}/g, product.description)
output = output.replace(/{%ID%}/g, product.id)

if(!product.organic )
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
return output
}


const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
   console.log(req.url);
   console.log(url.parse(req.ur));
    const pathName = req.url;
    // OVERVIEW page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' })
       const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
       const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
       res.end(output)
    }
    //PRODUCT page 
    else if (pathName === '/product') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.end(tempProduct)
    }
    //   API page
    else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(data);
    }
    //   NOT-FOUND page
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>Page not found</h1>');
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request');
})
// const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8')
// const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8')
// const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8')

// const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8')
// const dataObj = JSON.parse(data)

// const slugs = dataObj.map( el => slugify(el.productName, {lower: true})); 
// console.log(slugs);

// const server = http.createServer((req, res) => {

//     const { query, pathname } = url.parse(req.url, true);

//     // overview page
//     if (pathname === '/' || pathname === '/overview') {
//         res.writeHead(200, { 'Content-type': 'text/html' })

//         const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('')
//         const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
//         res.end(output);
//     }

//     // product page
//     else if (pathname === '/product') {
//         res.writeHead(200, { 'Content-type': 'text/html' })
//         const product = dataObj[query.id]
//         const output = replaceTemplate(tempProduct, product)
//         res.end(output);
//     }

//     // API
//     else if (pathname === '/api') {
//         res.writeHead(200, { 'Content-type': 'application/json' })
//         res.end(data);
//     }

//     // Not found
//     else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hello-world'
//         });
//         res.end('<h1> page not found </h1>')
//     }
// });

// server.listen(8000, '127.0.0.1', () => {
//     console.log('listening to the request on port 8000');
// });