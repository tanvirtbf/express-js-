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
//   next()
// }
// app.get('/', [callback1,callback2,callback3,callback4], (req,res)=>{
//   res.send('Combined!')
// })


// Chained Route Callbacks
// app.route(path) - It returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware. Use app.route() to avoid duplicate route names. 

// app.route('/student')
//   .get((req,res)=>{
//     res.send('All Students')
//   })
//   .post((req,res)=>{
//     res.send('Add New Student')
//   })
//   .put((req,res)=>{
//     res.send('Updated Student')
//   })
//   .delete((req,res)=>{
//     res.send('Deleted Student')
//   })

// Another Example : 
  // app.route('/student')
  // .all((req,res,next)=>{
  //   // runs for all HTTP verbs first
  //   console.log('run for all!')
  //   next()
  // })
  // .get((req,res)=>{
  //   res.send('All Students')
  // })
  // .post((req,res)=>{
  //   res.send('Add New Student')
  // })
  // .put((req,res)=>{
  //   res.send('Updated Student')
  // })
  // .delete((req,res)=>{
  //   res.send('Deleted Student')
  // })

// upore /student er moddhe get method ashleo upore .all() run hoye tarpor .get() run hobe. jodi /student er moddhe .post() method call hoy tao prothome .all() run hobe then .post() run hobe . tar mane jei method eii call hok na kno prothome .all() run hobe then sei method . 
// tar mane amra ekhane validation er moto rakhte pari . or kichu restriction er jonno erokom routing korte pari 

app.listen(port, ()=>{
  console.log(`Server start with http://localhost:${port}`)
}) 




