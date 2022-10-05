const express = require('express');
const app  = express();

app.get('',(req,res)=>{
  console.log("Data requested by the browrse",req.query.name)
  res.send(`<h1>Hello ${req.query.name}, Welcome to the home page</h1>
  <a href = '/about'>Go to about page</a>
  `);
});

app.get('/about',(req,res)=>{
  res.send(`
  <h1>This is About Page</h1>
  <input type="text" placeholder = "Enter user name" value="${req.query.name}" />
  <input type="submit">
  `);
});

app.get('/help',(req,res)=>{
  res.send("This is about Help page");
});

app.listen(4000);