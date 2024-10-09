import express from 'express'
import web from './routes/web.js'
import { join } from 'path'

const app = express()

// app.use(express.static(join(process.cwd(),'public')))

// setup the directory where template files are located
// app.set('views','./views') // jodi views folder er vitore amar static file gula thake tokhon ai code ta dite hoy na . 

// setup the template engine to use
// app.set('view engine','ejs') // kon template engine ami use korbo seta ullekh kora lage..

app.use(express.static(join(process.cwd(),'public')))

app.use('/',web)

const port = process.env.PORT || '3000'

app.listen(port, ()=>{
  console.log(`App Run With http://localhost:${port}`)
})


