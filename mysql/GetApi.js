const express = require('express');
const app = express();
const con = require('./config')
app.get('', (req, res) => {
  con.query("select * from mobile",(err,result)=>{
    if(err){
      res.send("error")
    }
    else{
      res.send(result)
    }
  })
})

app.listen(4000)