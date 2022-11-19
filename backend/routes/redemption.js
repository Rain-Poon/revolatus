const express = require('express');
app = express()
const router = express.Router();
const Redemption = require('../models/Redemption');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { getDb, connectToDb } = require('../db');
var ObjectId = require('mongodb').ObjectId;

const { authenticateToken } = require("../auth")

app.use(express.json())

let db = getDb()

connectToDb((err) => {
    if(!err){
      db = getDb()
    }
})

// create Recycling Station

router.post('/', (req, res) => {
    const collection = db.collection('redemption');

    const rd = new Redemption({
        title: req.body.title,
        miles: req.body.miles
    });

    collection
        .insertOne(rd)
        .then(result => {
        res.status(201).json(result)
        })
        .catch(err => {
        res.status(500).json({err: 'Could not create new document'})
        });
});

// get all Redemption Items

router.get('/', authenticateToken, async (req, res) => {
    const collection = db.collection("redemption");
    const all = await collection.find().toArray();
    res.json(all);
})

module.exports = router