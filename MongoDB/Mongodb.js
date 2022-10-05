const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const database = 'e-comm';

async function dbConnection() {
  const result = await client.connect();
  let db = result.db(database);
  return db.collection('products');
  // let response = await collection.find({name:'M40'}).toArray();
  // console.log(response)
}

module.exports = dbConnection;
//*********************************** */ First way to handle promise return by the dbconnection ==> using then
// dbConnection().then((resp) => {
//   resp.find().toArray().then((data) => {
//     console.warn(data)
//   })
// })

//*********************************Second way to handle promise returned by the dbconnection==> using async and await */

// const main = async ()=>{
//   let data = await dbConnection();
//   data =  await data.find().toArray();
//   console.log(data)
// }

// main();