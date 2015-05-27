var express = require('express');
var fs      = require('fs');
var request = require('request');
var app     = express();
var FH = require('./modules/filehandler.js')
var DB = require('./modules/database.js');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors')


app.use(cors())


app.get('/get', function(req, res){

    var n = parseInt(req.query.n)
    var after = req.query.after
    var param = {
        'is_album' : false,
        'ups' : { "$gt" : 400}
    }

    FH.getconfig(function(config) {
        db = new DB(config)
        MongoClient.connect(db.url, function(err, db) {
            if (after === undefined) {
                db.collection('reddititems').find(param, {}, {'limit':n, "sort": [['_id','desc']]}, function(err, result) {
                    result.toArray(function (err, res_arr) {
                        res.json(res_arr)
                        console.log(JSON.stringify(param))
                    })
                })
            } else {
                db.collection('reddititems').findOne({'r_id':after}, function(err, doc) {
                    if (doc) {
                        param['created'] = { "$lt" : doc['created'] }
                        db.collection('reddititems').find(param, {}, {'limit':n, "sort": [['_id','desc']]}, function(err, result) {
                            result.toArray(function (err, res_arr) {
                                res.json(res_arr)
                                console.log(JSON.stringify(param))
                            })
                        })
                    }
                    else
                        res.json([])
                })
            }
        })
    })

})


app.get('/getcount', function(req, res){

    FH.getconfig(function(config) {
        db = new DB(config);
        MongoClient.connect(db.url, function(err, db) {
            db.collection('reddititems').count(function (err, count) {
                if (err)
                    res.json(err)
                res.json(count)
            })
        })
    })
})
app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;