const express = require("express")
const router = express.Router()



router.get("/", function (req, res) {
res.render('index.njk', { title: 'Välkommen till Keros Kizzeria' })
})


router.get("/about", function (req, res) {
  res.render('about.njk', { title: 'Keros Kizzeria' })
})
module.exports = router