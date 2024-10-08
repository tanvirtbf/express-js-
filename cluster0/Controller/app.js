import express from 'express'
import stu from './routes/studentRoutes.js'

const app = express()

const port = process.env.PORT || '3000'

app.use('/student',stu)


app.listen(port, ()=>{
  console.log(`App Run With http://localhost:${port}`)
})

