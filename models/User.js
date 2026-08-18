const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    UserId:{
        type:String,
        required:true,
        unique:true
    },
    UserName:{
        type:String,
        required:true
    },
    EmailId:{
        type:String,
        required:true,
        unique:true
    },
    College:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("User",userSchema);
