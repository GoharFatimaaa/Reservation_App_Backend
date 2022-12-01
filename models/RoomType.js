const mongoose=require('mongoose')
const roomTypeSchema=new mongoose.Schema({

    RoomTypeID:{
        type:String,
        required:true,
    },
    RoomTypeName:{
        type:String,
        required:true,
    },
    RoomDetail: [{ type: mongoose.Types.ObjectId,required:true, ref: 'RoomDetail' }]

})
const  RoomType=mongoose.model("RoomType",roomTypeSchema)
module.exports=RoomType