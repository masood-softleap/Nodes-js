import mongoose from "mongoose";
const userShema=new mongoose.Schema({
name:{
    type:String
},
father:{
    type:String
},
email:{
    type:String
},
phone:{
    type:Number
},



},{timestamps:true})
const userModel=mongoose.model('user',userShema)
export default userModel