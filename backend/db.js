const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(process.env.DB_URL)
            .then(client => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log("DB:", err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}