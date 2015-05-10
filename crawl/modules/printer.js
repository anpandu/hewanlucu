
var Printer = function () {};

Printer.prototype.cheerio = require('cheerio');
Printer.prototype.fs      = require('fs');


Printer.prototype.print_output = function(id, results, callback){
    var output_dir = 'output/'
    var output_file = output_dir + 'output_'+id+'.json'
	Printer.prototype.fs.writeFile(output_file, JSON.stringify(results, null, 4), function(err){
		// console.log('File successfully written! - Check your project directory for the ' + output_file + ' file')
        callback()
	})
}

module.exports = new Printer ();