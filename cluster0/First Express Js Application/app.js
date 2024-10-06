// First Express JS Application

import express from 'express'
const app = express()

const port = process.env.PORT || '3001'

app.get('/', (req,res)=>{
  console.log(req.url)
  res.send('Hello World!')
})

app.listen(port, ()=>{
  console.log(`Server listening at http://localhost:${port}`)
})

