// View 

// views contain the HTML served by your application and separate your application logic from your presentation logic. Views are stored in the views directory.

// Creating View
// create a folder named views then in views folder, create file index.html 

// Create Route for View

// Example : 
app.get('/',(req,res)=>{
  res.sendFile(join(process.cwd(),'views','index.html'))
})

// res.sendFile --- This is used to transfers the file at the given path. Sets the Content-Type response HTTP header field based on the filename's extension. Unless the root option is set in the options object, path must be an absolute path to the file.

// process.cwd() --- process is node's global object and .cwd() returns where node is running. (process holo node er ekta global object and process er ekta function holo cwd(). ai function return kore kothay amar node run korche..)

// 'views' --- eta holo folder er nam , jei folder er vitor index.html ase 
// 'index.html' --- eta holo sei html file jeta load hobe

// upore sendFile() er vitor process.cwd() function mainly views and index.html file er path ber kore internaly 


