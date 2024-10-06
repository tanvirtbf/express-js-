// Routing...

// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET,postMessage,and so on).

// Each route can have one or more callback functions, which are executed when the route is matched.

// Syntax : 
// app.method(path, callback)

// method --- GET ? POST ? PUT ? PATCH ? DELETE ?
// path --- which url have search or send request by user
// callback --- ai path e user hit korle ki response pabe setaii ekhane deya 

// Another Syntax : 
// app.method(path, [callback1, callback2, callback3,....])
// jodi 1 er beshi callback run koraite chai ai url e hit korle tahole syntax aita. 

