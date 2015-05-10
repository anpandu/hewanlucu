var FH = require('./modules/filehandler.js')
var DH = require('./modules/datahandler.js');

FH.read_json('output/output_1.json', function(json) {
	DH.item_process(json, function(res){
		console.log(res)
	})
})