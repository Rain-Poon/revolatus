const express = require('express');
app = express()
const router = express.Router();
const RecyclingStation = require('../models/Recycling');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { getDb, connectToDb } = require('../db');

app.use(bodyParser.json())

let db

db=getDb()

router.post('/', async (req, res) => {
    const rs = new RecyclingStation({
        category: req.body.category,
        tradeQuantity: req.body.tradeQuantity,
        milesQuantity: req.body.milesQuantity,
        brandName: req.body.brandName
    });

    rs.save()
        .exec()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err)
        });
});

module.exports = router