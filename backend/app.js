const express = require('express');
const app = express();
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
const User = require('./models/User')
const Tier = require('./models/Tier')

const jwt = require("jsonwebtoken");

const morgan = require("morgan")

app.use(express.static("../frontend/out"))

morgan(':method :url :status :res[content-length] - :response-time ms');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }

    next();
});

const { getDb, connectToDb } = require('./db');

require("dotenv").config();

app.use(bodyParser.json())

let db;

connectToDb((err) => {
    if (!err) {
        app.listen('8000', () => {
            console.log('app listening on port 8000')
            db = getDb()
        
        })
    }
})

// Import Routes
const recyclingRoute = require('./routes/recycling');
app.use('/api/recycling', recyclingRoute)

const redemptionRoute = require('./routes/redemption');
app.use('/api/redemption', redemptionRoute)

const userRoute = require('./routes/user');
app.use('/api', userRoute)
