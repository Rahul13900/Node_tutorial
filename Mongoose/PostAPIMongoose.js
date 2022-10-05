
// INCOMPLETE CODE LOCALHOST NOT WORKING FOR THIS ONE;
const express = require('express');
require('./config')

const product = require('./product');
const app = express();
app.use(express.json)

app.get('/list',(req,res)=>{
 
})

// app.post('/create',(req,res)=>{
//   console.log(req.body)
//   res.send("Done")
// })

app.listen(5000)