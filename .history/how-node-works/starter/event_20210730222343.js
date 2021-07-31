const EventEmitter = require('events')

const myEmitter =  new EventEmitter();

myEmitter.on('newSa')

myEmitter.emit('newSale')