// const app=require('./app')

// let a=20
// let b=30
// const arr=[5,8,9,4,5,50];
//  let res=arr.filter((i)=>{

//     return i>5

// })
// console.log(res)
// // console.log(arr[ 0])
// // console.log(app);



// class 7 make basic server output on browers

// make base server'

// const http=require('http')




// const fun=(req,res)=>{
//     res.write("helljojko")
//     res.end();

// }
// http.createServer(fun).listen(4510)

// http.createServer((req,res)=>{
//     res.write("hello");
//     res.end();
// }).listen(4500); 



// ===============================
// class8
// package.jsn file detail'

// var colors = require('colors');

// console.log("hello".red)

// ========================

// class 10 nodemon'
// nodemon use for run code countinesly
//console.log("try nodemon with node js")

// start a code using 
// npx nodemon ./indexe.js
//console.log(100-100)


// make a smiple api'


// const http = require("http");
// const data = require("./app")

// const fun = ((req, res) => {
//    res.writeHead(200, { 'Content-Type': 'application\json' });
//    res.write(JSON.stringify(data ))

//    res.end();
// })
// http.createServer(fun).listen(4000)

// =============
const express = require('express')
const product = require('./data')
const app = express();

app.get('/', (req, res) => {
   res.send("hello")
})

app.get('/products:brand', (req, res) => {
   const a = product.filter((i) => i.brand.toLowerCase() === req.params.brand.toLowerCase())
   res.send(a)
})
app.listen(3001)        