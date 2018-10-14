var config = require('../config');
var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;

let data = [
    {
        "number": 322,
        "audiences": [
            {
                "number": 423,
                "capacity": 55,
                "type": "computer",
                "floor": 2,
            },
            {
                "number": 425,
                "capacity": 56,
                "type": "computer",
                "floor": 3,
            },
        ]
    },
    {
        "number": 2,
        "audiences": [
            {
                "number": 423,
                "capacity": 55,
                "type": "lectorium",
                "floor": 2,
            },
            {
                "number": 424,
                "capacity": 56,
                "type": "computer",
                "floor": 3,
            },
            {
                "number": 425,
                "capacity": 56,
                "type": "lectorium",
                "floor": 3,
            },
        ]
    }
]

var uri = config.uri;

/* GET home page. */
router.get('/', function (req, res, next) {
    mongoClient.connect(uri, function(err, client) {
        client.db("web-makaka").collection("housings").find({}).toArray(function (err, housings) {
            if(err) return res.sendStatus(400);

            res.json(housings);
            client.close();
        });

    });
});

router.post("/create", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    const housing = {number: req.body.number, audiences: []};

    mongoClient.connect(uri, function(err, client){
        client.db("web-makaka").collection("housings").insertOne(housing, function(err, result){
            if(err) return res.sendStatus(400);
            res.json(result);

            client.close();
        });
    });
});

router.delete('/delete/:id', function (req, res) {

    var number = +req.params.id;
    mongoClient.connect(uri, function(err, client){
        client.db("web-makaka").collection("housings").deleteOne({number: number}, function(err, result){

            if(err) return res.status(400).send();

            res.end();
            client.close();
        });
    });


});

router.put('/update/:id', function (req, res) {

    const housing = req.body;
    const number = +req.params.id;

    mongoClient.connect(uri, function(err, client){
        client.db("web-makaka").collection("housings").findOneAndUpdate({number: number},{$set: housing}, function(err, result){
            if(err) return res.sendStatus(400);

            res.json(result.value);
            client.close();
        });
    });
});

router.get('/:housingId', function (req, res, next) {

    const number = +req.params.housingId;

    mongoClient.connect(uri, function(err, client) {
        client.db("web-makaka").collection("housings").findOne({number: number }, function (err, housing) {
            if(err) return res.sendStatus(400);

            res.json(housing.audiences);
            client.close();
        });
    });
});

//audiences

router.post(`/:housingId/audience/add`, function (req, res) {

    const number = +req.params.housingId;

    mongoClient.connect(uri, function(err, client) {

            const db = client.db("web-makaka").collection("housings");

            db.findOne({number: number }, function (err, housing) {
                if(err) return res.sendStatus(400);
                housing.audiences.push(req.body);
                db.findOneAndUpdate({number: number},{$set: {audiences: housing.audiences}}, function(err2, result2){
                    if(err2) return res.sendStatus(400);

                    client.close();
                    res.json(housing.audiences);
                });
            });
    });
});

router.put('/:housingId/audiences/:audienceId/edit', function (req, res) {

    const number = +req.params.housingId;

    mongoClient.connect(uri, function(err, client) {

        const db = client.db("web-makaka").collection("housings");

        db.findOne({number: number }, function (err, housing) {
            if(err) return res.sendStatus(400);

            for(let i = 0; i<housing.audiences.length; i++){
                if(housing.audiences[i].number === req.params.audienceId){
                    housing.audiences[i] = req.body;
                }
            }
            db.findOneAndUpdate({number: number},{$set: {audiences: housing.audiences}}, function(err2, result2){
                if(err2) return res.sendStatus(400);

                client.close();
                res.json(housing.audiences);
            });
        });
    });
});

router.delete('/:housingId/audiences/delete/:audienceId', function (req, res) {

    const number = +req.params.housingId;

    mongoClient.connect(uri, function(err, client) {

        const db = client.db("web-makaka").collection("housings");

        db.findOne({number: number }, function (err, housing) {
            if(err) return res.sendStatus(400);

            for(let i = 0; i<housing.audiences.length; i++){
                if(housing.audiences[i].number === req.params.audienceId){
                    housing.audiences.splice(i,1);
                }
            }
            db.findOneAndUpdate({number: number},{$set: {audiences: housing.audiences}}, function(err2, result2){
                if(err2) return res.sendStatus(400);

                client.close();
                res.json(housing.audiences);
            });
        });
    });
});


module.exports = router;