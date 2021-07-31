const EventEmitter = require('events')

const myEmitter =  new EventEmitter();

myEmitter.on('newSale', () => {
    console.log('There was anew sale');
})
myEmitter.on('newSale', () => {
    console.log('costThere was anew sale');
})


myEmitter.emit('newSale')