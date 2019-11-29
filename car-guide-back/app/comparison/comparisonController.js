const express = require('express'),
      router = express.Router(),
      Comparison = require('./comparisonModel');


//TODO: include auth.

//Post a user comparison between two cars
router.post('/', async (req, res) => {
    //create a new comparison
    try {
        const comparison = new Comparison(req.body);
        await comparison.save();
        res.status(201).send({ comparison });
    } catch (error){
        res.status(400).send( error );
    }
});

//Get all comparisons from a user.
router.get("/:user", (req, res) => {
    var req_user = req.params.user;

    try{
        Comparison.find({user_username: req_user}, (err, all) => {
            if(err) return console.log(err);
            res.status(200).send(all);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
})

//Get a specific comparisons from a user with the name in the url params.
router.get("/", (req, res) => {

    var req_user = req.query.user, req_name = req.query.name;

    try{
        Comparison.find({user_username: req_user, name: req_name}, (err, all) => {
            if(err) return console.log(err);
            res.status(200).send(all);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
})

router.put("/", (req, res) => {
    var req_user = req.query.user, req_name = req.query.name;
    try{
        Comparison.findOneAndUpdate({user_username: req_user, name: req_name}, {$set : req.body}, { new : true }, (err, doc) => {
            if(err) return console.log(err);
            res.status(200).send( doc );
        });
    } catch ( error ){
        console.log(error);
        res.status(400).send( error );
    }
});

router.delete("/", (req, res) => {
    var req_user = req.query.user, req_name = req.query.name;

    try{
        Comparison.deleteOne({user_username: req_user, name: req_name}, (err, doc) => {
            if(err) return console.log(err);
            res.status(200).send(doc);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
});

module.exports = router;