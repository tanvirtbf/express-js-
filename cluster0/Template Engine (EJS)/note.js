// Setup EJS 
// npm install ejs 

// app.js
// setup the directory where template files are located

// app.set('views','./views') --- ekhane 'views' eta static. kintu './views' holo jei folder er vitore ejs file rakha hoise setar nam . folder nam ja hobe ekhane taii hobe... kintu ami jodi views folder er moddhei ejs file rakhi tahole ai code ta na likhleo hobe..

// Setup the Template Engine to use
// app.set('view engine','ejs') --- ai code ta hubuhu boshate hobe . eta mainly express ke ami bole disi amar template engine konta. jemon ami ejs template engine use kortesi tai second parameter e ejs likhsi. pug use korle second parameter e pug likhtam


// Creating Routes for Template Files
// jehetu eta html file na tai etake alada vabe render korte hoy
// app.get('/', (req,res)=>{
//   res.render('index')  
// })
// ekhane 'index.ejs' likhleo kichu hoito na . kintu jodi app.set('view engine', 'ejs') eta dei tahole express bujhte parbe ami ejs template engine use korbo . tokhon index.ejs na diye sudhu index dileo hobe . kintu jodi app.set('view engine', 'ejs') ai code ta app.js file e na likhe dei tokhon obosshoi index.ejs likhte hobe

// If the view engine property is not set, you must specify the extension of the view file. 
// app.set('view engine','ejs')
// router.get('/',(req,res)=>{
//   res.render('index.ejs')
// })

// When you make a request to the home page, the index.ejs file will be rendered as HTML


// render() Method
// render method diye ejs file ke html file e convart kore page e show kora hoy 

// render method er 3 ta parameter ase 
// 1. ejs file 
// 2. variables or object or array
// 3. callback

// 1. ejs file : 
// ami jei ejs file ta render korte chai tar nam . 
// jemon 
// res.render('index.ejs')

// 2. variables or object or array
// ami jodi chai oi ejs file e kichu variable pass korte jetar vittite ami kaj korte chai tahole eta somvob.
// jemon : 
// res.render('index.ejs', { 'name':'Tanvir Ahmed' , 'age' : 24 })

// 3. callback 
// jodi ami error dhorte chai tokhon use hoy




