const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url =
    'mongodb+srv://abdelrhman:abdelrhman2003@complete-node.ib0rr.mongodb.net/?retryWrites=true&w=majority&appName=complete-node';
let _db; // store the database connection to access it from other files

// function that connects to mongodb
const mongoConnect = (callback) => {
    MongoClient.connect(url)
        .then((client) => {
            console.log('connected to database');
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
    throw 'No database foound';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
