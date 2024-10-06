// Routing...

// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET,postMessage,and so on).

// Each route can have one or more callback functions, which are executed when the route is matched.

// Syntax : 
// app.method(path, callback)

// app ---- app is a instance of express
// method --- GET ? POST ? PUT ? PATCH ? DELETE ? method is an HTTP request method in lowercase
// path --- which url have search or send request by user
// callback --- ai path e user hit korle ki response pabe setaii ekhane deya 

// Another Syntax : 
// app.method(path, [callback1, callback2, callback3,....]) 
// OR 
// app.method(path, [callback1, callback2,...], callback)
// jodi 1 er beshi callback run koraite chai ai url e hit korle tahole syntax aita. 

// Example : 
// app.get('/', (req,res)=>{...})
// app.post('/signup', (req,res)=>{...})

// Methods 
// GET --- Retrieve Data 
// POST --- Create/Insert Data
// PUT --- Completely Update Data
// PATCH --- Partially Update Data
// DELETE --- Delete Data
// ALL --- Any HTTP Request Method (eta express nije banaise . jodi ami sure na thaki kon method e request ashce tokhon ai method use hoy)



