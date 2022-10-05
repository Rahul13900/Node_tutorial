const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm")

const productSch = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String
});


const saveInDb = async () => {
  const productMode = new mongoose.model('products', productSch);
  let data = new productMode({
    name: "m101",
    price: 240,
    brand: "MI",
    category: "Mobile"
  });
  let result = await data.save();
  console.log(result)
}

const updateInDb = async () => {
  const productMode = new mongoose.model('products', productSch);
  let data = await productMode.updateOne(
    { name: "A52s" }, { $set: { price: 500 } }
  )
  console.log(data)
}

const deleteInDb = async ()=>{
  const productMode = new mongoose.model('products',productSch);
  let data = await productMode.deleteOne(
    {name:"m10"}
  );
  console.log(data);
}

const findInDb = async ()=>{
  const productMode = new mongoose.model('products',productSch);
  let data = await productMode.find({name:"Mi note 10"});
  console.log(data);
}
findInDb()
