const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({

    userName:{
        type:String,
        required:true,
    },
    location:{
        type :String,
        required:true
    },
   businessUnit:{
    type:String,
    required:true,
   }
    

})
const User=mongoose.model("User",userSchema)
module.exports=User