
var FileHandler = function () {};

FileHandler.prototype.fs      = require('fs');
FileHandler.prototype.read_json = function (filepath, callback) {
	FileHandler.prototype.fs.readFile(filepath, 'utf8', function (err, data) {
		if (err) {
			console.log(err)
		}
		data = JSON.parse(data)
		callback(data)
	});
}



module.exports = new FileHandler ();
