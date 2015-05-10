var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


var Processer = require('./modules/processer.js');


// var url = [
//     'http://www.reddit.com/r/aww',
//     'http://www.reddit.com/r/aww?count=25',
//     'http://www.reddit.com/r/aww?count=50',
//     'http://www.reddit.com/r/aww?count=75'
// ]
// var url_max_length = url.length


app.get('/scrape', function(req, res){

    

    request(url.shift(), function(error, response, html){
        id = url_max_length - url.length
        console.log(id)
        Processer.process(id, html, error)

        request(url.shift(), function(error, response, html){
            id = url_max_length - url.length
            console.log(id)
            Processer.process(id, html, error)
        })
		res.send('Check your console!')
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;