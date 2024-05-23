import express  from "express";
import  {Createuser,getUser,updateUser,deleteUser}  from "../controllers/usercontroller.js";



const router=express.Router();


router.post('/create',Createuser)
router.get('/getUser',getUser)
router.put('/updateUser/:id',updateUser)
router.post('/deleteUser/:id',deleteUser)

export  default router