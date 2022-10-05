// put method is used to update the data using api, though we can update our data using post method too but put method is recommended

const express = require('express');
const dbConnection = require('./Mongodb')
const Mongodb = require('mongodb')

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

app.put('/',async(req,res)=>{
  let data = await dbConnection()
  let result = await data.updateOne(
    {name:req.body.name},{$set:req.body}
  )
  res.send(result)
})

app.delete('/:id',async(req,res)=>{
  let data = await dbConnection();
  let result = await data.deleteOne({_id: new Mongodb.ObjectId(req.params.id)})
  res.send(result)
})

app.listen(4000)