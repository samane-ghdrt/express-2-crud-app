const express = require('express');
const app = express();
const port=process.env.PORT ||3000;
const {rout}=require('./rout/rout');
app.use(rout);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port,(err)=>{
  if(err){
    console.log(err.message);
  }
})
