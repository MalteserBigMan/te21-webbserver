router.get("/", function (req, res) {
    res.render('onepiecechange.njk', { title: 'One Piece' })
    })
    router.post('/', function(req, res) {
        console.log(req)
    
        res.render('onepiecechange.njk',{
            title: "One Piece",
            name: req.body.name,
            greeting: req.body.greeting,
        })
    })
