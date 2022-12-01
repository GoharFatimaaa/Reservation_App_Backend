const mongoose=require('mongoose')
const bookingSchema=new mongoose.Schema({

    userName:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    roomName:{
        type :String,
        required:true
    },
   roomType:{
    type:String,
   },
   participants: {
    type: String
   },
   Date:{
    type: Number, default: (new Date()).getTime()
   },
   bookingDuration: {
    type: Number, default: (new Date()).getTime()
   },
   startTime: {
    type: Number, default: (new Date()).getTime(),
    required: true
   },
   endTime: {
    type: Number, default: (new Date()).getTime(),
    required: true
   }
    

})
const Booking=mongoose.model("Bookings",bookingSchema)
module.exports=Booking