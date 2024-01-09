const express = require("express")
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks');
const app = express();
const indexRouter = require("./routes/index")
const xmasRouter = require('./routes/xmas')

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


const port = process.env.PORT || 3000



app.use((req, res, next)=>{
    res.locals.url = req.originalUrl
    next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/", indexRouter)
app.use('/xmas', xmasRouter)

app.use(express.static('public'))

//app.get("/",(req, res) => {
//    res.render("index.njk",{title: 'Hello world from template'})
//})


//app.get("/tre",(req, res) => {
//    res.send("Trevligt")
//})

//app.get("/hello",(req, res) => {
 //   const name ="malte"
   // const surname = "lindkvist"
    
  //  res.send(`hello ${name} ${surname}`)
//})



app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})