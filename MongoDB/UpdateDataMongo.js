const dbConnection = require('./Mongodb');

const updateData = async ()=>{
  let data = await dbConnection();
  let result = await data.updateMany(
    {name:'flip 3'},{$set:{name:'flip pro 6'}}
  );
  console.log(result)
}

updateData();