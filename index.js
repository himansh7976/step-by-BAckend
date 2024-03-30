// const app=require('./app')

// let a=20
// let b=30
//  const arr=[ 5,8,9,4,5,50];
//  let a=arr.find((e)=>{
//   return e==5

//  })

//  console.log(a);
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
// const express = require('express')
// const product = require('./data')
// const app = express();

// app.get('/', (req, res) => {
//    res.send("hello")
// })

// app.get('/products:brand', (req, res) => {
//    const a = product.filter((i) => i.brand.toLowerCase() === req.params.brand.toLowerCase())
//    res.send(a)
// })
// app.listen(3001)        

// Curd file system'
// make file using fs'


// const fs=require('fs')
// fs.writeFileSync("apple.text","appple ji");


// ======================

//  syncronors and asyncronos program









// console.log("start");
// console.log("llogive");
// console.log("kokok");
// setTimeout(()=>{
//    console.log("hello")

// },3000)

// console.log("333")

// ======================================
// asyncronos handle'



// let a = 20;
// let b = 0;




// let wait = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       b = 30;
//       resolve(30)

//    }, 3000)
// })

// wait.then((u)=>{
//    console.log(u)
// })

// console.log(a + b);


// ===============================

// Express js/

// let express=require("express");
// const app=express();

// app.get('',(req,res)=>{
//    res.send("hello ji")
// })

// app.get('/about',(req,res)=>{
//    console.log(req.query.name)
//    res.send("hello "+req.query.name)

// })



// app.listen(5010);
// ===================
//================express js======/







// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     console.log(req.query)
//    res.send("hello")



// })


// app.get('/aboutt', (req, res) => {
//     res.send('hello about')
// })

// app.get('/aboutt/ha', (req, res) => {
//     console.log(req.query.name)
//     res.send('hello about')
// })




// app.listen(8001)




// ======================================

// render html and json' 


// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     console.log(req.query)
//     res.send(`<h1>hello</h1>
//     <a href="/aboutt">go to about</a>
    
//     `)



// })


// app.get('/aboutt', (req, res) => {
//     res.send({
//         name:"anil",
//         email:"hiamshu@fuiui.com"
//     })
// })
// app.listen(8001)


const express=require('express');
const app=express();



app.listen(5000)




























