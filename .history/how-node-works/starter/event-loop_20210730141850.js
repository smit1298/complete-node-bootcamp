const { setImmediate } = require("timers/promises");

setTimeout(() => {
    console.log('Timer 1 finished');
}, 0);
setImmediate(() => {
    console.log('Immediate 1 finished');
}, 0);
