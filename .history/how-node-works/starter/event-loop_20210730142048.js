const { setImmediate } = require("timers/promises");
fs = require()
setTimeout(() => {
    console.log('Timer 1 finished')
}, 0);

setImmediate(() => {
    console.log('Immediate 1 finished')
},);

fs