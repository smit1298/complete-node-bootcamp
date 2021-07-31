const EventEmitter = require('events')

const myEmitter =  new EventEmitter();

class sales extends EventEmitter{
    constructor ({

    }
}

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