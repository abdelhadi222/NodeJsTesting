import express  from "express"
import http from "http";
import bodyParser from "body-parser";
import cors from "cors"
// import mongoose from "mongoose";
// import UserRouter from "./Router/Router.js";




const PORT = 5600


const app = express()

app.use(bodyParser.json())
http.createServer(app)
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({origin: "*",credentials:true}));

let array = [
    {name:"Mouha",age:"23"},
    {name:"Randa",age:"44"},
    {name:"lina",age:"65"},
    {name:"lisa",age:"12"},
    {name:"abdou",age:"4"},
    {name:"ali",age:"22"},
    {name:"hocine",age:"26"},
    {name:"nadir",age:"28"},
    {name:"aymen",age:"33"},
    {name:"samia",age:"68"},
    {name:"samir",age:"2"},
    {name:"fodil",age:"15"},
    {name:"zohra",age:"10"},
    {name:"amine",age:"100"},
    {name:"islam",age:"98"},
]

app.get('/api',async (req,res)=>{
  console.log('rr');
  let rand = Math.floor(Math.random() * array.length)
  console.log(array[rand]);
  return res.json({User:array[rand]})
})






// mongoose.connect("mongodb://127.0.0.1:27017/Shop")
// .then(()=>{
//     console.log('Data base Done!');
// }).catch((er)=>{
//     console.log("validation err is ",er);
// })
app.listen(PORT,()=>{
   console.log(`PORT IS ${PORT}`)
})