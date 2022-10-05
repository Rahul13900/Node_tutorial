const mongoose = require('mongoose');

const main = async ()=>{
  await mongoose.connect("mongodb://localhost:27017/e-comm")
  const productSch = new mongoose.Schema({
    name:String,
    price:Number
  });
  // schema is basically used to define the dataTypes or constraints on the data we will be entering
  // model :- model basically connects node.js to mongodb based on the schema we have defined;
  // to connect this schema to mongodb;
  const productMode = new mongoose.model('products',productSch);
  let data =  new productMode({name:"m101",price:240});
  let result = await data.save();
  console.log(result)
}

main();