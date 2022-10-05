const express = require('express');
const dbConnection = require('./Mongodb')

const app = express();
app.use(express.json()); // how to get boby using request ==> we need to use express.jon to get body using request.

app.get('/', async (req,res)=>{
  let data = await dbConnection();
  data =  await data.find().toArray();
  res.send(data);
})

app.post('/', async(req,res)=>{
  let data = await dbConnection();
  let result = await data.insertOne(req.body)
  res.send(result)
})
app.listen(4000)