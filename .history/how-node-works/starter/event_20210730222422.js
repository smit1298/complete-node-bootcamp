const EventEmitter = require('events')

const myEmitter =  new EventEmitter();

myEmitter.on('newSale', () => {
    console.log'();
})

myEmitter.emit('newSale')