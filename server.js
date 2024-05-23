 
 
 import express from 'express';
import dbCon from './utils/db.js';
import router from './routes/routes.js';
import cors from 'cors'
dbCon();

 const app = express();
app.use(express.json())
app.use(cors())
app.use('/api',router)
app.listen(4000,()=>{
    console.log("server is running at 4000")
})
