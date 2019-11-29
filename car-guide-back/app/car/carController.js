const express = require('express'),
      router = express.Router(),
      Car = require('./carModel');


//TODO: include auth.

function parseToJSONObj(smth){
    var jsonStr = JSON.stringify(smth);
    return JSON.parse(jsonStr);
}

router.post('/', async (req, res) => {
    //create a new car
    try {
        const car = new Car(req.body);
        await car.save();
        res.status(201).send({ car });
    } catch (error){
        res.status(400).send( error );
    }
});

router.post('/many', async (req, res) => {
    //create a new car
    try {
        var data = parseToJSONObj(req.body);
        Car.insertMany(data, (err, docs) =>{
            if(err) return console.log(err);
            res.status(201).send(docs);
        });
    } catch (error){
        console.log(error);
        res.status(400).send( error );
    }
});


router.get("/", (req, res) => {
    try{
        Car.find({}, (err, all) => {
            if(err) return console.log(err);
            res.status(200).send(all);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
})

router.get("/:license", (req, res) => {
    var req_license = req.params.license;
    try{
        Car.find({license: req_license}, (err, doc) => {
            if(err) return console.log(err);
            res.status(200).send(doc);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
});

router.put("/:license", (req, res) => {
    var req_license = req.params.license;
    try{
        Car.findOneAndUpdate({license: req_license}, {$set : req.body}, { new : true }, (err, doc) => {
            if(err) return console.log(err);
            res.status(200).send( doc );
        });
    } catch ( error ){
        console.log(error);
        res.status(400).send( error );
    }
});

router.delete("/:license", (req, res) => {
    var req_license = req.params.license;
    try{
        Car.deleteOne({license: req_license}, (err, doc) => {
            if(err) return console.log(err);
            res.status(200).send(doc);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
});

//TODO: GET apis for filters

module.exports = router;

