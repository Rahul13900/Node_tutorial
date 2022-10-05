const dbConnection = require('./Mongodb')
const main = async ()=>{
  let data = await dbConnection();
  data =  await data.find().toArray(); // find is equivalent to where as in this we define our filter for the data we want to fecth
  console.log(data)
}

main();