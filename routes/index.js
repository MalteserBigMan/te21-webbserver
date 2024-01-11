const express = require("express")
const router = express.Router()



router.get("/", function (req, res) {
res.render('index.njk', { title: 'Välkommen till Keros Kizzeria' })
})


router.get("/about", function (req, res) {
  res.render('about.njk', { title: 'Keros Kizzeria' })
})

router.get("/onepiece", function (req, res) {
  res.render('onepiece.njk', { onepiecetitel: 'THE ONE PIECE IS REAL' })
})


router.post("/onepiece", function (req,res){
  res.render('onepiece.njk', {greeting: onepiecetitel})
})
module.exports = router