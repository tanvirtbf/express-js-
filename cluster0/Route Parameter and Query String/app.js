import express from 'express'
import separateRoutes from './routes/separateRoute.js'

const app = express()

const port = process.env.PORT || '3000'

// app.get('/student/delete/1',(req,res)=>{
//   res.send('Student Deleted!')
// })
// app.get('/student/delete/2',(req,res)=>{
//   res.send('Student Deleted!')
// })
// app.get('/student/delete/3',(req,res)=>{
//   res.send('Student Deleted!')
// })

// Dynamic Routing 
// app.get('/student/delete/:id',(req,res)=>{
//   res.send('Student Deleted!')
// })

// Params 
// app.get('/student/delete/:id',(req,res)=>{
//   const {id} = req.params
//   console.log(req.params)
//   console.log(req.params.id)
//   console.log(id)
//   res.send(`Student Deleted! ${id}`)
// })

// Another Example : 
// app.get('/product/:category/:id',(req,res)=>{
//   const {category,id} = req.params
//   console.log(req.params)
//   console.log(req.params.category)
//   console.log(req.params.id)
//   res.send(`Product Category : ${req.params.category} <br /> Product Id : ${req.params.id}`)
// })

// Another Example : 
// app.get('/product/:category/and/:id', (req,res)=>{
//   const {category,id} = req.params 
//   res.send(`Category : ${category} and Id : ${id}`)
// })

// Another Example : 
// app.get('/train/:from-:to',(req,res)=>{
//   const {from,to} = req.params
//   res.send(`From : ${from} and To : ${to}`)
// })

// Another Example : 
// app.get('/train/:from.:to',(req,res)=>{
//   const {from,to} = req.params
//   res.send(`From : ${from} and To : ${to}`)
// })

// Separate Routes

// app.use('/about',separateRoutes)
// app.use('',separateRoutes)


// Route Parameter with Regx(Regular Expression)
// /student/:id([0-9]{2}) --- id hobe 0 theke 9 porjonto number and 2 ta digit er beshi hobe na
// /product/order/:year/and/:month([a-z]) --- month er route string jate a theke z porjonto hoy

// param()
// app.param('name',(req,res,next,name)=>{
//   console.log(`Your Name is : ${name}`)
//   next()
// })
// app.get('/student/:name/:id',(req,res)=>{
//   res.send('Hello World!')
// })


// Query String 
// app.get('/product',(req,res)=>{
//   console.log(req.query)
//   res.send('Response Okay!')
// })
// hit /product?name=tanvir&age=25
// then print {name = "tanvir", age: 25}






app.listen(port, ()=>{
  console.log(`App Run with http://localhost:${port}`)
})