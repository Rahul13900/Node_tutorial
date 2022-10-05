const express = require('express');
const app  = express();

app.get('',(req,res)=>{
  console.log("Data requested by the browrse",req.query.name) // http://localhost:4000/?name=Rahul using query we request the data from the browser
  res.send(`Hello ${req.query.name}, Welcome to the home page`);
});

app.get('/about',(req,res)=>{
  res.send("This is about page");
});

app.get('/help',(req,res)=>{
  res.send("This is about Help page");
});

app.listen(4000);