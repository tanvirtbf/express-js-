import express from 'express'
import home from './routes/homeRotes.js'
import about from './routes/aboutRoutes.js'

const app = express()

app.use('', home)
app.use('/about', about)

const port = process.env.PORT || '3000'

app.listen(port, ()=>{
  console.log(`App Run With http://localhost:${port}`)
})


