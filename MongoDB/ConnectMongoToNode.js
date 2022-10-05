const {MongoClient} = require('mongodb') // we only need MongoClient so we destructure and just use that
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database= 'e-comm'

async function getData(){
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('products');
  let response  = await collection.find({}).toArray()
  console.log(response);
}

getData();

// Question -- can we connect 2 database simultaneously ==>  yes we can do that