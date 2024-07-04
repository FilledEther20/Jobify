const mongoose=require("mongoose")
require("mongoose-type-email");


const schema=new mongoose.Schema({
    email:{
        type:mongoose.SchemaTypes.email,
        required:true
    },

    password:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("SavedUser",schema);