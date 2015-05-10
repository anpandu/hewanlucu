var express = require('express');
var fs      = require('fs');
var request = require('request');
var app     = express();
var Printer = require('./modules/printer.js');
var Crawler = require('./modules/crawler.js');
var DH = require('./modules/datahandler.js');

var argv    = require('argh').argv;



if ((argv['url']!=undefined)&&(argv['page']!=undefined)) {

    count = 0
    limit = parseInt(argv['page'])
    url = argv['url']

    c = new Crawler(limit)
    // c.crawl(url, Printer.print_output)
    c.crawl(url, DH.item_process)

} else {
    console.log('need url & page parameter!')
}