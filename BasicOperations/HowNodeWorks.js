// processing between input and output in Node.js => 1st Call stack is called , then optionaly node APIs and then Callback Queue
// callstack is used to maintain the log of all the functions of the node.js

console.log("1st Execution")

setTimeout(()=>{
  console.log("2000 time interval")
},2000)

setTimeout(()=>{
  console.log("0 time interval")
},0)

console.log("last Execution")

// output of this code is 

// 1st Execution
// last Execution
// 0 time interval // in this we have given time interval of 0 still it executes after the last console==> this is because it is a part of the node Api as it has c++ implementation
// 2000 time interval

// Node Api content will only be executed till the main function of the node is complemented;