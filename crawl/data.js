

var fs = require('fs');

var __dirname = 'output'
fs.readFile( __dirname + '/output_1.json', function (err, result) {
	if (err)
		throw err; 

	res = JSON.parse(result);
	items = res['data']['children']

	items2 = items.map(function(element, index, array) {
		item = {}
		item['id'] = element['data']['id']
		item['title'] = element['data']['title']
		item['domain'] = element['data']['domain']
		item['raw_url'] = element['data']['url']
        item['ups'] = element['data']['ups']
        item['created'] = element['data']['created']
        item['permalink'] = element['data']['permalink']
        item['num_comments'] = element['data']['num_comments']
		return item;
	})

	console.log(items2);
});