const EventEmitter = require('events');
const emitter = new EventEmitter();
//adding event listener
emitter.on('messageLogged',(eventArgs) => {
    console.log(eventArgs);
    console.log("Message Logger event callback ");
});
//emit event
let params = {id : 1,name : 'messageLogged', user : 'kishan' }
emitter.emit('messageLogged',params);