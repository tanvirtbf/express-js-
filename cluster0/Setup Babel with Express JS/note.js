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
