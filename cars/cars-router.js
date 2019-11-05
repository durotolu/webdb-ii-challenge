const express = require('express');
const db = require('../data/db-config')
const Cars = require('../data/helpers/carsModel')
console.log(process.env.NODE_ENV);

const router = express.Router();

router.get('/', (req, res) => {
    Cars.find()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(500).json({'Failed to retrieve cars': err.message });
        });
});

router.get('/:id', (req, res) => {
    Cars.findById(req.params.id)
        .then(car => {
            if(car) {
                res.json(car);
            } else {
                res.status(500).json({'Failed to retrieve car': err.message });
            }
        })
        .catch(err => {
            res.status(404).json({'cannot find car': err.message });
        })
})

router.post('/', (req, res) => {
    Cars.insert(req.body)
        .then(id => {
            res.status(201).json({ created: id});
        })
        .catch(err => {
            res.status(500).json({'Failed to insert new car': err.message });
        })
})

module.exports = router;