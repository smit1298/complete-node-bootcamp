const EventEmitter = require('events')

const myEmitter =  new EventEmitter();

myEmitter.on('newSale', () => {
    log
})

myEmitter.emit('newSale')