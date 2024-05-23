
import userModel from "../models/User.js"


const Createuser= async (req,res)=>{
   try {
    const {name,father,email,phone}=req.body;
    const newUser=new userModel({name,father,email,phone})
    await newUser.save()    
res.status(200).json({success:true,message:"User added successfully",newUser})
} catch (error) {
       res.status(500).json({success:false,message:"Addition error",newUser})
    console.log(error)
   }
}
const getUser=async(req,res)=>{
try {
    const user=await userModel.find()
    if(!user){
        res.status(404).json({success:false,msg:"user not found"})
    }
    res.status(200).json({success:true,user})
    
} catch (error) {
    console.log(error)
    res.status(500).json({success:false,msg:"internal server error"})
    
}


}
const updateUser= async (req,res)=>{
    try {
        const Id=req.params.id;
        const updatedUser=await userModel.findByIdAndUpdate(Id,req.body,{new:true})
        if(!updatedUser){
          return  res.status(404).json({success:false,msg:"user not found"})
            
        }
        res.status(200).json({success:true,msg:"updated ",updatedUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,msg:"internal server error"})
        
    }
    
}

const deleteUser =async(req,res)=>{
    try {
        const Id=req.params.id
       const deletedUser=await userModel.findByIdAndDelete(Id)
       if(!deletedUser){
           res.status(404).json({success:false,msg:"Not found"})

       }
        res.status(200).json({success:true,msg:"Deleted"})
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,msg:"internal server error"})
        
        
}
}
export {Createuser,getUser,updateUser,deleteUser}