import express from 'express'
import web from './routes/web.js'
const app = express()

// Set Template Engine 
app.set('view engine','ejs')

app.use('',web)

const port = process.env.PORT || '3000'

app.listen(port, ()=>{
  console.log(`App Run With http://localhost:${port}`)
})