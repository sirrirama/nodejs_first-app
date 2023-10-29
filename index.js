import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose.connect(" mongodb://127.0.0.1:27017",{
    dbName:"backend",
}).then(()=> console.log("database connected")).catch((e)=> console.log(e));

const messageSchema= new mongoose.Schema({
    name: String,
    email: String,
});

const message=mongoose.model("mesage",messageSchema)
const app=express();

app.use(express.static(path.join(path.resolve(),"public")));
app.set("view engine","ejs")
app.get("/add",(req,res)=>{
    message.create({name:"ABHI",email:"sample@gmail.com"}).then(()=>{
       res.send("NIce");
    });
});

app.listen(5000,()=>{
    console.log("server is working");
});
