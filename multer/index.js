const express = require('express');
const multer = require('multer');
const data = require('../MakeApi/Api');

const app = express()

const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,res,cb){
      cb(null,"uploads")
    },
    filename: function(req,file,cb){
      cb(null,file.filename+"_"+data.now()+".jpg")
    }
  })
}).single("user_file")

// app.post('/upload',upload,(req,res)=>{
//   res.send("file uploaded")
// });

app.listen(4000);