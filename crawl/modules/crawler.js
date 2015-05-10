
var Crawler = function (_l) {
	_l = typeof _l !== 'undefined' ? _l : 1;
	Crawler.prototype.limit = _l
};


Crawler.prototype.count = 0
Crawler.prototype.printer = require('./printer.js')
Crawler.prototype.request = require('request');

Crawler.prototype.crawl = function(url) {
    Crawler.prototype.request(url, function(error, response, html){
        Crawler.prototype.count += 25
        try {
            result = JSON.parse(html)
            after = result['data']['after']

            if (after) {
                base_url = (url.indexOf('&count=')==-1) ? url : url.substring(0, url.indexOf('&count='))
                next_url = base_url + '&count=' + Crawler.prototype.count + '&after=' + after   
                console.log(Crawler.prototype.count/25 + ' ' +next_url)
                Crawler.prototype.printer.print_output(Crawler.prototype.count/25, result, function() {
                    if (Crawler.prototype.count < Crawler.prototype.limit*25)
                        Crawler.prototype.crawl(next_url)  
                })
            } else {
                console.log("Job finished, null found.")
            }
        }
        catch(err) {
            console.log(err.message)
            if (Crawler.prototype.count < Crawler.prototype.limit*25)
                Crawler.prototype.crawl(next_url)  
        }
        
    })
}

module.exports = Crawler;