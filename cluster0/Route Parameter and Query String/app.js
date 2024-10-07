import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

app.post('/',(req,res)=>{
  res.send('Hello')
})

app.listen(port, ()=>{
  console.log(`App Run with http://localhost:${port}`)
})