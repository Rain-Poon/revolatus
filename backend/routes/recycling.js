const express = require('express');
app = express()
const router = express.Router();
const RecyclingStation = require('../models/Recycling');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { getDb, connectToDb } = require('../db');
var ObjectId = require('mongodb').ObjectId;

const { authenticateToken } = require("../auth")

app.use(bodyParser.json())

let db = getDb()

connectToDb((err) => {
    if(!err){
      db = getDb()
    }
})

// create Recycling Station

router.post('/', (req, res) => {
    const collection = db.collection('recycling');

    const rs = new RecyclingStation({
        category: req.body.category,
        tradeQuantity: req.body.tradeQuantity,
        milesQuantity: req.body.milesQuantity,
        brandName: req.body.brandName
    });

    collection
        .insertOne(rs)
        .then(result => {
        res.status(201).json(result)
        })
        .catch(err => {
        res.status(500).json({err: 'Could not create new document'})
        });
});

// get all Recycling Stations

router.get('/', async (req, res) => {
    const collection = db.collection("recycling");
    const all = await collection.find().toArray();
    res.json(all);
})

// filter to get the Recycling Stations of that category only

router.get('/:categoryName', authenticateToken, async (req, res) => {
    console.log(req.user)
    const collection = db.collection("recycling");
    console.log(req.params.categoryName);
    const all = await collection.find({category: `${req.params.categoryName}`}).toArray();
    res.json(all);
})

module.exports = router