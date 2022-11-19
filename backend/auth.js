const jwt = require('jsonwebtoken');

function generateAccessToken(username) {
    return jwt.sign(username, process.env.JWT_TOKEN, { });
}


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    let token = "";
    if (authHeader != undefined){
        token = authHeader.split(' ')[1]
    } else {
        return res.status(401).json({status: "failed"})
    }
    if (token != undefined){
        jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
            console.log(err)

            if (err) return res.status(403).json({status: "failed"})
            // req.user = user

            next()
        })
    } else {
        return res.status(403).json({status: "failed"})
    }
}

module.exports = {
    generateAccessToken,
    authenticateToken
}
