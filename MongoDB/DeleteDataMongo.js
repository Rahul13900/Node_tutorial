const dbConnection = require('./Mongodb');

const deleteData = async ()=>{
  let data =  await dbConnection();
  let result = await data.deleteMany(
    {name:'flip pro hfkho'}
  )
  if(result.acknowledged){
    console.log("Data Deleted")
  }
  if(result.deletedCount === 0){
    console.log("This data is not present in the database")
  }
}

deleteData();
