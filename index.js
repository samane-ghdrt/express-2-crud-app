require("dotenv").config();

const cors=require('cors');
const express = require('express');

const app = express();

const {rout}=require('./rout/rout');
const{data}=require('./middlewares/middleware');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(data);

app.get("/", (req, res) => {
  res.send("home page");
}); 

app.use('/product',rout); 

app.use((res,req)=>{
  res.send("not found");
});

const port=process.env.PORT ||3000;

app.listen(port,(err)=>{
  if(err){
    console.log(err.message);
  }
});
