const express = require("express");
const cors = require("cors");
const  mongoose  = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT);

app.get("/user",(req,res)=>{
    res.send("");
})

mongoose.connect(process.env.MONGO_URI)
.then((res)=>console.log("Success"))
  .catch((error)=>console.log("error"))
