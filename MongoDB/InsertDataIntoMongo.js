const dbConnection = require('./Mongodb');

const insert = async ()=>{
  const db =  await dbConnection();
  const result =  await db.insertMany(
    [
      {name:'flip',brand:'Samsung',price:'640',category:'Mobile'},
      {name:'flip 2',brand:'Samsung',price:'740',category:'Mobile'},
      {name:'flip 3',brand:'Samsung',price:'840',category:'Mobile'}
    ]
  );
  if(result.acknowledged){
    console.log("data Insertd ")
  }
}

insert();