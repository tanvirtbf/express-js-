For Production : 
    "build": "babel index.js --out-dir prd",
    "start": "npm run build && nodemon prd/index.js",
    "serve":"node prd/index.js",

For Development :
    "build": "babel index.js -w --out-dir prd",
    "start": "nodemon prd/index.js",