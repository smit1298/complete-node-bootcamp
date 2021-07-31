const EventEmitter = require('events')

const myEmitter =  new EventEmitter();

myEmitter.on('newSale', () => {
    console.log('There was anew sale');
})
myEmitter.on('newSale', () => {
    console.log('costumer name:John');
})

myEmitter.on('newSale', stock => {
    console.log(`there are ${stock}`);
})
myEmitter.emit('newSale')