import express from 'express'

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


app.listen(port, ()=>{
  console.log(`App Run with http://localhost:${port}`)
})