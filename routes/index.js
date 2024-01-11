const express = require("express");
const router = express.Router();

let onepiecetitel = 'THE ONE PIECE IS REAL';

router.get("/", function (req, res) {
    res.render('index.njk', { title: 'Välkommen till Keros Kizzeria' });
});

router.get("/about", function (req, res) {
    res.render('about.njk', { title: 'Keros Kizzeria' });
});

router.get("/onepiece", function (req, res) {
    res.render('onepiece.njk', { onepiecetitel: onepiecetitel });
});

router.post("/onepiece", function (req, res) {
    const newTitle = req.body.newTitle; 

    onepiecetitel = newTitle;

    res.render('onepiece.njk', { onepiecetitel: onepiecetitel });
});

module.exports = router;
