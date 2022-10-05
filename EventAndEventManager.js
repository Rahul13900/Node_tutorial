const express = require('express');
const EventEmitter = require('events'); // EventEmitter has its first letter capital to show it is a class;

const app = express()

const event = new EventEmitter();

let count =0;
event.on("countApi",()=>{
  count++;
  console.log("Event called",count)
})

app.get("/",(req,res)=>{
  res.send("Api called")
  event.emit("countApi") // this is working as a button to call the event "countApi"
});

app.get("/search",(req,res)=>{
  res.send(" search Api called")
  event.emit("countApi")
});

app.get("/update",(req,res)=>{
  res.send(" update Api called")
  event.emit("countApi")
});

app.listen(5000);