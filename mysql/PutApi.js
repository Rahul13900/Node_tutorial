const express = require('express');
const app = express();
const con = require('./config')

app.use(express.json())

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

app.post('',(req,res)=>{
  const data =req.body;
  con.query('INSERT INTO MOBILE SET ?',data,(err,result)=>{
    if(err) err
    else{
      res.send(result);
    }
  })
})

app.put('/:name',(req,res)=>{
  const data = [req.body.name,req.params.name]
  con.query('UPDATE MOBILE SET name = ?,brand = ?,price = ? where name = ?',data,(err,result,feilds)=>{
    if(err){
      if(err) err
      else{
        res.send(result);
      }
    }
  })
})

app.listen(4000)