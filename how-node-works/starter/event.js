const EventEmitter = require('events');
const http = require('http')

class Sales extends EventEmitter {
    constructor() {
        super();

    }
}

const myEmitter = new Sales();


myEmitter.on('newSale', () => {
    console.log('There was a new sale');
})
myEmitter.on('newSale', () => {
    console.log('costumer name:John');
})

myEmitter.on('newSale', stock => {
    console.log(`there are ${stock} items in the stock`);
})
myEmitter.emit('newSale', 9)

///////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Reequest received!')
    console.log(req.url);
    res.end('Request received')
});
server.on('request', (req, res) => {
   console.log('Another request 😍')
});
server.on('close', () => {
    console.log('server closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('waiting for requests...');
})