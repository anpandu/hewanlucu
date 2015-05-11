
var DataHandler = function () {};

DataHandler.prototype.count = 0

DataHandler.prototype.item_transform = function (item) {
	var result = {}
	result['r_id'] = item['data']['id']
	result['subreddit'] = item['data']['subreddit']
	result['title'] = item['data']['title']
	result['domain'] = item['data']['domain']
	result['raw_url'] = item['data']['url']
	if (result['domain']=='imgur.com')
		result['img_urls'] = [result['raw_url'].replace('http://', 'http://i.')+'.jpg']
	else
		result['img_urls'] = [result['raw_url'].replace('.gifv', '.gif')]
    result['ups'] = item['data']['ups']
    result['created'] = new Date(1000*item['data']['created'])
    result['raw_created'] = item['data']['created']
    result['mongo_created'] = new Date()
    result['permalink'] = item['data']['permalink']
    result['num_comments'] = item['data']['num_comments']
	return result
}
DataHandler.prototype.item_process = function (results, callback) {
	items = results['data']['children']
	items = items.map(DataHandler.prototype.item_transform)
	items.sort(function(a,b){return (a['raw_created']<b['raw_created']) ? 1 : -1;})
	if (callback != undefined)
		callback(items)
}



module.exports = new DataHandler ();
