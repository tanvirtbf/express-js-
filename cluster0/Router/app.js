import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

// Student route
app.get('/student/all', (req,res)=>{
  res.send('All Student')
})
app.post('/student/create', (req,res)=>{
  res.send('New Student Create')
})
app.put('/student/update',(req,res)=>{
  res.send('Student Update')
})
app.delete('/student/delete',(req,res)=>{
  res.send('Student Deleted')
})

// Teacher route
app.get('/teacher/all', (req,res)=>{
  res.send('All teacher')
})
app.post('/teacher/create', (req,res)=>{
  res.send('New teacher Create')
})
app.put('/teacher/update',(req,res)=>{
  res.send('teacher Update')
})
app.delete('/teacher/delete',(req,res)=>{
  res.send('teacher Deleted')
})

app.listen(port, ()=>{
  console.log(`Server start with http://localhost:${port}`)
}) 

