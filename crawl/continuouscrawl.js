var FH = require('./modules/filehandler.js')
var DataHandler = require('./modules/datahandler.js');
var Database = require('./modules/database.js');
var Printer = require('./modules/printer.js');
var Crawler = require('./modules/crawler.js');

var argv    = require('argh').argv;
var moment    = require('moment');

if ((argv['url']!=undefined)&&(argv['timer']!=undefined)) {

    url = argv['url']    
    crawler = new Crawler(0)
    timer = 1000 * parseInt(argv['timer'])

	FH.getconfig(function(config) {
		crawler.crawl_single(url, function(results, url, callback){
			console.log(moment().format('dddd DD-MM-YYYY hh:mm:ss') + " crawl_finish " + url)
			DataHandler.item_process(results, function(res){
				db = new Database(config)
				res.forEach(function (element) {
					db.upsert_item(element)
				})
				setTimeout(function() {
					callback() 
				}, timer)
			})
	    })
	})


} else {
    console.log('need url & page parameter!')
}