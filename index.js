const express=require("express")
require('dotenv').config()
const {noteRouter}=require("./Controller/note")

const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
const app=express()
app.use(express.json())

app.use("/notes", noteRouter)
app.use(cors(corsOptions))



const {connect}=require("./db")


app.listen(process.env.port, async()=>{
    try{
    console.log("connected to data base")
    await connect
    }catch(err){
        console.log(`err on port ${process.env.port}`)
    }

    console.log(`server started on Port ${process.env.port}` )
})