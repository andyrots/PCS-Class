const events = require('events'),
    eventEmitter = new events.EventEmitter();

eventEmitter.on('second', () => {
    console.log(Date());
});

function getSecond() {   
    eventEmitter.emit('second');
}

setInterval(getSecond,1000);

