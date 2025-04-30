const data=(req,res,next)=>{
    const dataNew=new Date();
    res.send(dataNew);
    next();
}
module.exports={data}