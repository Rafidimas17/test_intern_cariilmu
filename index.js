require('dotenv').config()
const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const usersRouter=require('./router/usersRouter.js')
const adminRouter=require('./router/adminRouter.js')
const categoryRouter=require('./router/categoryRouter.js')
const app = express()

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
const database=mongoose.connection;
try {
    app.use(cors());
    app.use(express.json());
    app.use(usersRouter);
    app.use(adminRouter);
    app.use(categoryRouter);
    app.listen(process.env.PORT,()=>console.log("Server ready on port", process.env.PORT))
    database.once("open",()=>console.log("Database connected"))
} catch (error) {
    database.on("error",()=>console.log(error))
}


