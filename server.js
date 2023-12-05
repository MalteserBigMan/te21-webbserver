const express = require("express")
const nunjucks = require('nunjucks');
const app = express();
const indexRouter = require("./routes/index")


nunjucks.configure('views', {
    autoescape: true,
    express: app
});


const port = process.env.PORT || 3000

app.use("/", indexRouter)

app.use(express.static('public'))

app.get("/",(req, res) => {
    res.render("index.njk",{title: 'Hello world from template'})
})


app.get("/tre",(req, res) => {
    res.send("Trevligt")
})

app.get("/hello",(req, res) => {
    const name ="malte"
    const surname = "lindkvist"
    
    res.send(`hello ${name} ${surname}`)
})



app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})