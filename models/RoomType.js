const mongoose=require('mongoose')
const roomTypeSchema=new mongoose.Schema({

    RoomTypeName:{
        type:String,
        required:true,
    },

   
    

})
const  RoomType=mongoose.model("RoomType",roomTypeSchema)
module.exports=RoomType