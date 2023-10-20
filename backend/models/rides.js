const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const RidesSchema=new mongoose.Schema({
   vehicle:{
    type:String,
    required:true
   }, 
   owner:{
    type:String,
    
   },
   gender:{
    type:String,
    required:true
   },
   fare:{
    type:String,
   required:true
   },
   from:{
    type:String,
   
   },
   to:{
    type:String
   },
   // OfferedBy:{
   //    type:ObjectId,
   //    ref:"User"
   //   }
   
      
})
module.exports=mongoose.model("Ride",RidesSchema)