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

server.on('request')