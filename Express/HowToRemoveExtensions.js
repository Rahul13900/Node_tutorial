const express = require('express');
const path = require('path')


const app = express();

const dirPath = path.join(__dirname,'view')

app.get('view engine','ejs');

app.get('',(req,res)=>{
  res.sendFile(`${dirPath}/about.html`)
})
app.get('*',(req,res)=>{
  res.sendFile(`${dirPath}/nopage.html`)
})
app.listen(4000)