var FH = require('./modules/filehandler.js')
var DH = require('./modules/datahandler.js');
var DB = require('./modules/database.js');


files = []
for (var i = 1; i <= 40; i++) {
	files.push('../output/res_aww/output_'+i+'.json')
};

var importFiles = function (files, config, callback) {
	if (files.length > 0) {
		file = files.shift()
		FH.read_json(file, function(json) {
			DH.item_process(json, function(res){
				db = new DB(config)
				db.insert_items(res, function() {
					console.log(file)
					importFiles(files, config)
				})
			})
		})
	}
}

FH.getconfig(function(config) {
	importFiles(files, config)
})
