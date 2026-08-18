const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },

    ImageUrl:{
        type:String,
        required:true
    },

    Cost:{
        type:Number,
        required:true
    },

    Description:{
        type:String,
        default:""
    },

    UserEmail:{
        type:String,
        required:true
    },

    UserName:{
        type:String,
        required:true
    },

    College:{
        type:String,
        required:true
    },
    Category:{

    type:String,

    required:true

},

},{timestamps:true});

module.exports=mongoose.model("Product",productSchema);
