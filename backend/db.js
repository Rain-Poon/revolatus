const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect("mongodb+srv://Admin:1234@app.rqlgwwd.mongodb.net/?retryWrites=true&w=majority")
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