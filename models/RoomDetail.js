const mongoose=require('mongoose')
const roomDetailSchema=new mongoose.Schema({

    roomName:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
   roomTypeID: { type:mongoose.Types.ObjectId,required: true, ref: 'RoomType' }
    

})
const RoomDetail=mongoose.model("RoomDetail",roomDetailSchema)
module.exports=RoomDetail