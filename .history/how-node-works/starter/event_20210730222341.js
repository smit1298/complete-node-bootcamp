const EventEmitter = require('events')

const myEmitter =  new EventEmitter();

myEmitter.on('new')

myEmitter.emit('newSale')