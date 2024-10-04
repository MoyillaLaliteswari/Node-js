// const {format}=require('date-fns');
// const {v4:uuid}=require('uuid');

// console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))

// console.log(uuid())

const logEvents=require('./logEvents');

const EventEmitter=require('events');

class myEmitter extends EventEmitter{};

//initialize object
const myEmitter=new myEmitter();

//add Listener for the log event
myEmitter.on('log',(msg)=>logEvents(msg));

setTimeout(()=>{
    //Emit event
    myEmitter.emit('log','Log event emitted!');
},2000);
