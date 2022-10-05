const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const database = 'e-comm';

async function getData(){
  const result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('products');
  let response = await collection.find({name:'M40'}).toArray();
  console.log(response)
}

getData();