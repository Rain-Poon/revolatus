const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const saltRounds = 10;

function generateEncryptedPassword(){
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            if (!err) return hash
            else {
                console.log(err);
                return ""
            }
        });
    });
}

function checkPassword(pw1, pw2){
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
        if (!err){
            if (result == true) return true;
            else return false;
        } else {
            console.log(err)
            return false;
        }
    });
}


function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1m' });
}


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    if (!authHeader){
        const token = authHeader.split(' ')[1]
    } else {
        return res.status(401)
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}

module.exports = {
    generateEncryptedPassword,
    checkPassword,
    generateAccessToken,
    authenticateToken
}
