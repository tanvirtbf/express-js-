import express from 'express'
// const stu = require('./routes/student.js')
// const tea = require('./routes/teacher.js')

import stu from './routes/student.js'
import tea from './routes/teacher.js'

const app = express()

const port = process.env.PORT || '3000'

// Load Router Modules 
app.use('/student', stu) 
// upore app.use() er moddhe 2nd parameter holo stu object jeta /routes/student.js er moddhe router object . jei router object er moddhe onk gula router ase jemon /all , /create , /update etc. jokhon app.use() run hobe tokhon /student er sathe stu append hobe . that's mean jodi get request ashe tahole /student/all route hobe, jodi post request hoy tahole /student/create hobe, jodi put request hoy tahole /student/update hobe etc. and sei sei route er code run hobe...

app.use('/teacher',tea)


app.listen(port, ()=>{
  console.log(`Server start with http://localhost:${port}`)
}) 

