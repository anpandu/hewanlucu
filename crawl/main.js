var express = require('express');
var fs      = require('fs');
var request = require('request');
var app     = express();
var Printer = require('./modules/printer.js');
var Crawler = require('./modules/crawler.js');

var argv    = require('argh').argv;



if ((argv['url']!=undefined)&&(argv['page']!=undefined)) {

    count = 0
    limit = parseInt(argv['page'])
    url = argv['url']

    c = new Crawler(limit)
    c.crawl(url)

} else {
    console.log('need url & page parameter!')
}
