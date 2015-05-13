
var Crawler = function (_l) {
	_l = typeof _l !== 'undefined' ? _l : 1;
	Crawler.prototype.limit = _l
};


Crawler.prototype.count = 0
Crawler.prototype.printer = require('./printer.js')
Crawler.prototype.request = require('request');

Crawler.prototype.crawl = function(url, callback) {
    Crawler.prototype.request(url, function(error, response, html){
        Crawler.prototype.count += 25
        try {
            result = JSON.parse(html)
            after = result['data']['after']

            if (after) {
                base_url = url
                base_url = (base_url.indexOf('?count=')==-1) ? base_url : base_url.substring(0, base_url.indexOf('?count='))
                base_url = (base_url.indexOf('&count=')==-1) ? base_url : base_url.substring(0, base_url.indexOf('&count='))
                if (base_url.indexOf('?')==-1)
                    next_url = base_url + '?count=' + Crawler.prototype.count + '&after=' + after  
                else
                    next_url = base_url + '&count=' + Crawler.prototype.count + '&after=' + after   
                console.log(Crawler.prototype.count/25 + ' ' +next_url)
                callback(result, Crawler.prototype.count/25, function() {
                    if (Crawler.prototype.count < Crawler.prototype.limit*25)
                        Crawler.prototype.crawl(next_url, callback)  
                })
            } else {
                console.log("Job finished, 'after' not found.")
            }
        }
        catch(err) {
            console.log(err.message)
            if (Crawler.prototype.count < Crawler.prototype.limit*25)
                Crawler.prototype.crawl(next_url, callback)  
        }
        
    })
}

Crawler.prototype.crawl_single = function(url, callback) {
    Crawler.prototype.request(url, function(error, response, html){
        Crawler.prototype.count += 25
        try {
            result = JSON.parse(html)
            callback(result, url, function() {
                Crawler.prototype.crawl_single(url, callback)  
            })
        }
        catch(err) {
            console.log(err.message)
            Crawler.prototype.crawl_single(url, callback)  
        }
        
    })
}

module.exports = Crawler;