// console.log("Start execution of 1st statement")

// setTimeout(()=>{
//   console.log("Start execution of 2nd statement") // this statement will be executed after 3rd statement;
// },1000)


// console.log("Start execution of 3rd statement")

//==========================How to handle this drawback? -- we can use callbacks or promise
/* IMPORTANT ==> promise((resolve,reject)=>{
    promise is used to get the internal data of the asynch function and then provides the result;
})*/

let a = 20;
let b = 0;

let waitingdata = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(30)
  },1000)
})

waitingdata.then((data)=>{
  console.log(a+data)
})

// fetch function itself returns promise and we can access the promise using .then 