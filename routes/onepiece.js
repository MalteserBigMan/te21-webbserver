const express = require('express');
const router = express.Router();


router.get("/", function (req, res) {
    res.render('onepiecechange.njk', { title: 'One Psu' })
    })
    router.post('/', function(req, res) {
        console.log(req)
    
        res.render('onepiecechange.njk',{
            title: "One Piece",
            name: req.body.name,
            greeting: req.body.greeting,
        })
    })
