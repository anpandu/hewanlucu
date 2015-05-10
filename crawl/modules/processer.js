

var Processer = function () {};

Processer.prototype.cheerio = require('cheerio');
Processer.prototype.fs      = require('fs');

Processer.prototype.itemprocess = function(obj){
    var result = {}
    result['upvote'] = obj['upvote']
    result['title'] = obj['title']
    result['link'] = (obj['domain']=='imgur.com') ? ( [obj['raw_link'].slice(0, 7), 'i.', obj['raw_link'].slice(7)].join('') + '.jpg') : obj['raw_link']
    result['datetime'] = obj['datetime']
    result['comments_link'] = obj['comments_link']
    result['domain'] = obj['domain']
    return result
}

Processer.prototype.process = function(id, html, error) {
	if(!error){     
        var $ = Processer.prototype.cheerio.load(html)
        var raw_results = $('div.thing').map(function(){
	        var data = $(this)
            var raw_result = {}
            raw_result['upvote'] = data.find('div.midcol div.unvoted').text()
            raw_result['title'] = data.find('div.entry p.title a.title').text()
            raw_result['raw_link'] = data.find('div.entry p.title a.title').attr('href')
            raw_result['datetime'] = data.find('div.entry p.tagline time').attr('datetime')
            raw_result['comments_link'] = data.find('div.entry ul li.first a.comments').attr('href')
            raw_result['domain'] = data.find('div.entry p.title span.domain a').text()
            return raw_result
        }).get()
        var results = raw_results.map(Processer.prototype.itemprocess)

        Processer.prototype.print_output(id, results)
    }
}

module.exports = new Processer ();