import express from 'express'
import stu from './routes/studentRoutes.js'
import tea from './routes/teacherRoutes.js'

const app = express()

const port = process.env.PORT || '3000'

app.use('/student',stu)
app.use('/teacher',tea)


app.listen(port, ()=>{
  console.log(`App Run With http://localhost:${port}`)
})

