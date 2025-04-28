let products = [
    { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
    { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
    { id: 3, name: "Sony PlayStation 5", price: 499.99 },
    { id: 4, name: "MacBook Pro 16", price: 2399.99 },
    { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
  ];

const getAllBlogs=(res,req)=>{
 return  res.status(200).json(products)
};

const getSingle=(res,req)=>{
const {id}=req.params;
const user=products.find(userid=>userid.id===Number(id));
if (user) {
    return  res.status(200).json(user)
} else {
    return  res.status(404).send('user not find')
}
};

const createUser=(req,res)=>{
const {name,price}=req.body;
const userNew={
    id:products.length+1,
    name,
    price
}
res.status(201).json(userNew);
products.push(userNew)
};
const updateUser=(req,res)=>{
const {id}=req.params;
const updateU=products.map(user=>{
    if (user.id===Number(id)) {
        return{
           ...user,
           ...req.body
        }
    } 
    return user

})
products=updateU;
res.status(200).send(updateU);
};
const deletSingleUser=(req,res)=>{
const {id}=req.params;
const productNew=products.filter(user=>user.id!==id);
products=productNew;
res.status(204).json({ message: "deleted successfully" })
};
module.exports ={getAllBlogs,getSingle,createUser,updateUser,deletSingleUser}