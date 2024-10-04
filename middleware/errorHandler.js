const {logEvent}=require('./logEvents');

const errorHandler=(msg,req,res,next)=>{
    logEvent(`${err.name}:${err.message}`,'errLog.txt');
    console.err(err.stack());
    res.status(500).send(err.message);
}
module.exports=errorHandler;