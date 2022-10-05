const express = require('express');
const dbConnection = require('./Mongodb')

const app = express();

app.get('', async (req,res)=>{
  let data = await dbConnection();
  data =  await data.find().toArray();
  res.send(data);
})

app.listen(4000)