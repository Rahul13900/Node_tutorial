const express = require('express');
const path = require('path')

const app = express();
const dirPath = path.join(__dirname,'views');

app.set('view engine','ejs');

app.get('',(req,res)=>{
  const user={
    name:'Rahul',
    email:'rahul@test.com',
    city:'Bangalore'
  }
  res.render('profile',{user})
})

app.listen(4000)

// Dynamic pages are not used generally but still we should be knowing the use of dynamic pages