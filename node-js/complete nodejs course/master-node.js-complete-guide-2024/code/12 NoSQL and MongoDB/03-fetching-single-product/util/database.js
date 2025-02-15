const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    /** REPLACE CONNECTION STRING IF USING ATLAS
     *  "mongodb+srv://<username>:<password>@<cluster-id>.mongodb.net/<dbName>?retryWrites=true&authSource=admin"
     */
    MongoClient.connect(
        'mongodb+srv://abdelrhman:abdelrhman2003@complete-node.ib0rr.mongodb.net/?retryWrites=true&w=majority&appName=complete-node'
    )
        .then((client) => {
            console.log('Connected!');
            _db = client.db();
            callback();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
