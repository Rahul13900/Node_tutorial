const http = require('http');
http.createServer((req,res)=>{
  res.write("<h1>Hello this is Rahul Saini</h1>")
  res.end()
}).listen(4000) 