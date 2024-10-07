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
app.get('/student/delete/:id',(req,res)=>{
  const {id} = req.params
  console.log(req.params)
  console.log(req.params.id)
  console.log(id)
  res.send(`Student Deleted! ${id}`)
})


app.listen(port, ()=>{
  console.log(`App Run with http://localhost:${port}`)
})