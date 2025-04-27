const products=import('../rout/rout');

const getAllBlogs=(res,req)=>{
 return  res.status(200).json(products)
};
const getSingle=(res,req)=>{
const {id}=req.params;
const user=products.f
}
module.exports ={getAllBlogs,getSingle}