module.exports=(req,res,next)=>{
  // console.log("Filter")
  if(!req.query.age){
    res.send("Please Enter your Age")
  }
  else if(req.query.age < 18){
    res.send("You are not allowed to Access this website")
  }
  else{
    next()
  }
}