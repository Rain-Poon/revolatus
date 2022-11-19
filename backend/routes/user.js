// create user

const express = require("express");
const { checkPassword } = require("../auth");
const router = express.Router();
const { getDb, connectToDb } = require('../db');
const User = require("../models/User")

let db

connectToDb((err) => {
    if(!err){
      db = getDb()
    }
})

router.post('/login', async (req, res) => {
    const collection = db.collection('users');
    const { membershipID, password } = req.body;
    const user = collection.findOne({ membershipID: membershipID });
    if (checkPassword(password, user.password)){
        // Login success 
    }
})

router.post('/user', (req, res) => {
    const collection = db.collection('users');

    const user = new User({
        name: req.body.name,
        membershipID: req.body.membershipID,
        password: req.body.password,
        miles: req.body.miles,
        statusPoint: req.body.statusPoint,
        history: req.body.history,
    });

    console.log(user)

    collection
        .insertOne(user)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create new document' })
        })


});

// update miles

router.put('/user/:userID/miles/:updatemiles', (req, res) => {
    const collection = db.collection('users');
    collection
        .updateOne(
            { _id: ObjectId(`${req.params.userID}`) },
            {
                $inc: { miles: Number(req.params.updatemiles) },
                $push: { history: Number(req.params.updatemiles) }
            }
        );
    const pnt = collection.findOne({ _id: ObjectId(`${req.params.userID}`) });
    pnt.then(function (result) {
        res.json(result.miles)
    })
});

// update status point

router.put('/user/:userID/status/:updatestatusPoint', (req, res) => {
    const collection = db.collection('users');
    collection
        .updateOne(
            { _id: ObjectId(`${req.params.userID}`) },
            {
                $inc: { statusPoint: Number(req.params.updatestatusPoint) }
            }
        );
    const pnt = collection.findOne({ _id: ObjectId(`${req.params.userID}`) });
    pnt.then(function (result) {
        res.json(result.statusPoint)
    })
});

// get all users

router.get('/user', async (req, res) => {
    const urs = await db.collection('users').find().toArray();
    res.json(urs);
});

// get user's information

router.get('/user/:userID', async (req, res) => {
    const urs = await db.collection('users').findOne({ _id: ObjectId(`${req.params.userID}`) });
    res.json(urs);
});

// show current miles

router.get('/user/:userID/miles', async (req, res) => {
    const cm = await db.collection('users').findOne({ _id: ObjectId(`${req.params.userID}`) });
    res.json(cm.miles);
});

// show current status ponit

router.get('/user/:userID/status', async (req, res) => {
    const cs = await db.collection('users').findOne({ _id: ObjectId(`${req.params.userID}`) });
    res.json(cs.statusPoint);
});

// add status points needed for each tier
// plz implement one time only

router.post('/tier', (req, res) => {
    const collection = db.collection('tier')

    const tier = new Tier({
        green: req.body.green,
        silver: req.body.silver,
        gold: req.body.gold,
        diamond: req.body.diamond,
    });

    collection
        .insertOne(tier)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create new document' })
        })

});

// show current tier

router.get('/user/:userID/tier', async (req, res) => {
    const urs = await db.collection('users').findOne({ _id: ObjectId(`${req.params.userID}`) });
    const sp = urs.statusPoint;
    console.log(sp);
    if (sp < 100) {
        res.send("green");
    } else if (sp < 300) {
        res.send("silver");
    } else if (sp < 600) {
        res.send("gold");
    } else {
        res.send("diamond");
    };
});

// show points left to another tier

router.get('/user/:userID/pntleft', async (req, res) => {
    const urs = await db.collection('users').findOne({ _id: ObjectId(`${req.params.userID}`) });
    const sp = urs.statusPoint;
    console.log(sp);
    if (sp < 100) {
        res.send(`${100 - sp}`);
    } else if (sp < 300) {
        res.send(`${300 - sp}`);
    } else if (sp < 600) {
        res.send(`${600 - sp}`);
    } else {
        res.send(`${1200 - sp}`);
    };
})

module.exports = router;