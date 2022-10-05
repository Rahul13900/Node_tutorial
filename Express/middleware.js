//middleware are always applied on routes and cnnot be applied anywhere esle
//DEFINATION :- these are the functions used with routes , with the help of these we can access the request and response messages 
// and modify;
const express = require('express');
const app = express();

const applyFilter=(req,res,next)=>{
  // console.log("Filter")
  if(!req.query.age){
    res.send("Please Enter your Age") // this adds condition to access the website
  }
  else if(req.query.age < 18){
    res.send("You are not allowed to Access this website")
  }
  else{
    next() // until next is not called we cannot access the next page of the website
  }
}

// app.use(applyFilter)

app.get('',applyFilter,(req,res)=>{
  res.send("Welcome to Home Page")
})

app.get('/users',(req,res)=>{
  res.send("Welcome to User Page")
})


app.listen(4000)


//==============================================TYPES OF MIDDLEWARE======================================
/*1. Application level middleware ==> apply middle ware to complete application
2.Router level middleware ==> applies middleware to specific routes only
3. Error-handling  middleware
4.  built-in middleware
5. Third party middleware*/

//** */ to apply middleware to single/multiple route then we can just include the applyfilter const in that specific route only

// ex : - 
// app.get('',applyFilter,(req,res)=>{
//   res.send("Welcome to Home Page")
// })

//** / we can put the middleware code in seprate file and then export from there

//** we can apply middleware to more than one route without explicitely mentioning it */

