import express from 'express'
const app = express()

const port = process.env.PORT || '3000'

// app.all('/', (req,res)=>{
//   res.send('Hello Post!')
// })
// app.get('/',(req,res)=>{
//   res.send('Page not found!')
// })
// app.get('/',(req,res)=>{
//   res.send('Hello World@')
// }) 

// app.all('/api/*', (req,res)=>{
//   res.send('API Page')
// }) // (/api er por sob route er jonno with any method...)

// String Pattern Path 
// app.get('/ab?cd', (req,res)=>{
//   res.send('This route path will match acd and abcd')
// }) // This route path will match acd and abcd
// only /acd or /abcd route e hit hobe

// Regular Expression Path
// app.get(/a/, (req,res)=>{
//   res.send('Find a')
// }) // jekono route jekhane a symbol ache setateii ai callback hit hobe . jemon /fasd -- hit , /asdfsadf/fdssdf/dfd -- hit etc..

// One Callback 
// app.get('/',(req,res)=>{
//   res.send('Hello World!')
// })

// Multiple Callback 
// app.get('/', (req,res,next)=>{
//   res.send('Hello Worldss!')
//   next()
// }, (req,res, next)=>{
//   console.log('Second Callback')
//   next()
// }, (req,res)=>{
//   console.log('final clg')
// })

// Array of Callback 

// const callback1 = (req,res,next)=>{
//   console.log('First Callback')
//   next()
// }

// const callback2 = (req,res,next)=>{
//   console.log('Second Callback')
//   next()
// }

// const callback3 = (req,res,next)=>{
//   console.log('Third Callback')
//   next()
// }

// const callback4 = (req,res)=>{
//   res.send('Callback Finished!')
// }

// app.get('/',[callback1,callback2,callback3,callback4])


// Combination of Independent function and array of functions
// const callback1 = (req,res,next)=>{
//   console.log('First Callback')
//   next()
// }
// const callback2 = (req,res,next)=>{
//   console.log('Second Callback')
//   next()
// }
// const callback3 = (req,res,next)=>{
//   console.log('Third Callback')
//   next()
// }
// const callback4 = (req,res,next)=>{
//   console.log('Fourth Callback')
// }
// app.get('/', [callback1,callback2,callback3,callback4], (req,res)=>{
//   res.send('Combined!')
// })




app.listen(port, ()=>{
  console.log(`Server start with http://localhost:${port}`)
}) 




