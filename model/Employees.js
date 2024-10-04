const mongoose=require('mongoose');
const Schema=require('Schema');
const employeeSchema=new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Employees',employeeSchema)