const mongoose=require('mongoose')
const roomDetailSchema=new mongoose.Schema({

    roomName:{
        type:String,
        required:true,
    },
    location:{
        type :String,
        required:true
    },
   roomType:{
    type:String,
    required:true,
   }
    

})
const RoomDetail=mongoose.model("RoomDetail",roomDetailSchema)
module.exports=RoomDetail