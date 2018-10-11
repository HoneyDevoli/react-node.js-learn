var express = require('express');
var router = express.Router();

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
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json(data);
});

router.post("/create", function (req, res) {
    // const housing = new Housing(req.body);
    console.log(req.body);
    data.push(
        {
            'number': req.body.number,
            'audiences': []
        });
    console.log(data);
    res.sendStatus(201);
});

router.delete('/delete/:id', function (req, res) {
    data = data.filter((housing) => {
        return housing.number !== +req.params.id;
    });
    res.sendStatus(201);
});

router.put('/update/:id', function (req, res) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].number === +req.params.id) {
            data[i] = req.body;
        }
    }
    res.sendStatus(201);
});

router.get('/:housingId', function (req, res, next) {
    data.forEach((housing) => {
        if(housing.number === +req.params.housingId){
            return res.json(housing.audiences);
        }
    });
});

//audiences

router.post(`/:housingId/audience/add`, function (req, res) {
    // const housing = new Housing(req.body);
    data.forEach((housing) => {
       if(housing.number === +req.params.housingId){
           housing.audiences.push(req.body);
       }
    });
    console.log(req.body);
    res.sendStatus(201);
});

router.put('/:housingId/audiences/:audienceId/edit', function (req, res) {
    console.log(res.body);
    data.forEach((housing) => {
        if(+housing.number === +req.params.housingId){
            for(let i = 0; i<housing.audiences.length; i++){
                if(+housing.audiences[i].number === +req.params.audienceId){
                    housing.audiences[i] = req.body;
                }
            }
        }
    });
    return res.sendStatus(201);
});

router.delete('/:housingId/audiences/delete/:audienceId', function (req, res) {
    data.forEach((housing) => {
        if(housing.number === +req.params.housingId){
            for(let i = 0; i<housing.audiences.length; i++){
                if(+housing.audiences[i].number === +req.params.audienceId){
                    housing.audiences.splice(i,1);

                }
            }
        }
    });
    res.sendStatus(201);
});


module.exports = router;