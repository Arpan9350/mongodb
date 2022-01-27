const mongoose=require('mongoose');
const data=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    age:{
        type:Number,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
       
    },
    password:{
        type:String,
        
    }
})
module.exports = mongoose.model("category", data)