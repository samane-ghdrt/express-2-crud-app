const express=require('express');
const rout=express.Router();
const{getAllBlogs,getSingle,createUser,updateUser,deletSingleUser}=require('../cotroler/cotroler');
let products = [
    { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
    { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
    { id: 3, name: "Sony PlayStation 5", price: 499.99 },
    { id: 4, name: "MacBook Pro 16", price: 2399.99 },
    { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
  ];
rout.get('/',getAllBlogs);
rout.get('/:id',getSingle);
rout.put('/',createUser);
rout.patch('/:id',updateUser);
rout.delete('/:id',deletSingleUser);

module.exports={rout}