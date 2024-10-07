// Route Parameter

// Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
// The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
// The name of route parameters must be made up of "word characters" ([A-Za-z0-9])

// Example : 
// /student/:id       // www.example.com/student/12 
// ekhane id = 12

// Another Example : 
// /product/:category/:id     // www.example.com/product/mobile/23
// ekhane category = mobile and id = 23

// Another Example : 
// /train/:from-:to       // www.example.com/train/dhaka-coxbazar

// Route Parameter with Regx(Regular Expression)
// /student/:id([0-9]{2}) --- id hobe 0 theke 9 porjonto number and 2 ta digit er beshi hobe na
// /product/order/:year/and/:month([a-z]) --- month er route string jate a theke z porjonto hoy


