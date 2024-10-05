// What is Babel ? 

// Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of Javascript in current and older browsers or environments. Here are the main things Babel can do for you.

// r ki ki korte pare Babel ? 
// 1. Transform Syntax 
// 2. polyfill features that are missing in your target environment
// 3. Source code transformations

// note : browser akhno update hoy nai je se latest code bujhbe . browser akhno old javascript code bujhe . kintu developer ra to kaj easy korar jonno latest javascript er code kore . tai Babel sei latest code ke browser jei old code bujhe sei code e convert kore 

// Express js er moddhe Babel ke setup korar jonno kon kon package use korte hobe?

// 1. @babel/core
// 2. @babel/cli
// 3. @babel/preset-env

// 1. @babel/core 
// This is the main package to run any babel setup or configuration

// 2. @babel/cli 
// Babel comes with a built in CLI which can be used to compile files from the command line (ai package taii muloto latest code ke old code e convert kore)

// 3. @babel/preset-env
// This enables us to use new and upcoming features which node.js is yet to understand. New features are always new and will probably take time to implement in NodeJS default. (jehetu express js internally node js e convert hoy tai jodi amon kono latest feature ashe jeta node js e akhno implement hoy nai sei latest code ke competible node js code e convert kore ai package)

// How to install that 3 package ? 
// npm install @babel/core @babel/cli @babel/preset-env


// Babel CLI : 

// compile files : 
// jodi amar kase index.js file thake jetay latest js code ase tahole seta ke amake browser competible code e convert korte hobe.

// how to compile files?
// npx babel index.js -- It compiles index.js file

// jodi complied file er code onno kothau onno kono file e rakhte chai tahole?
// npx babel index.js --out-file index-compiled.js --- It compiles index.js file and output to a file index-compiled.js. We can use --out-file or -o

// jodi erokom chai je compiled file er code onno kothau onno file e rakhbo + jokhon main file e kono kisu change hobe sathe sathe automatic updated code ta compiled hoye sei jaygay chole jabe tahole??
// npx babel index.js --watch --out-file index-compiled.js --- It compiles index.js every time we make changes and output to a file index-compiled.js . We can use --watch or -w


// Compile Directory or Folder

// npx babel src --out-dir prd --- It compiles the entire src directory and output it to the prd directory by using either --out-dir or -d. This doesn't overwrite any other files or directories in lib.

// npx babel src --out-file index-compiled.js --- It compiles the entire src directory and output it as a single concatenated file (pura source code er folder ke compiled kore single file kora)


// Setup Babel : 

// 1. Install All Required Babel Packages
// npm install @babel/core @babel/cli @babel/preset-env
// (dev dependencies mood e install kora uchit . karon production e babel use hobe na)

// 2. Create a file called .babelrc at the root directory of Project and write this line -- { "presets": ["@babel/preset-env"] } or { "presets": ["@babel/env"] }

// 3. Open package.json file and write..
// "scripts":{
//   "build":"babel index.js --out-file prd",
//   "start":"npm run build && nodemon prd/index.js",
//   "serve":"node prd/index.js"
// }

 


