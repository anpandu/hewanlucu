
var Database = function (config) {
	Database.prototype.url = 'mongodb://'+config['mongo_domain']+':'+config['mongo_port']+'/'+config['mongo_database']	
}

Database.prototype.mongo_client = MongoClient = require('mongodb').MongoClient;

Database.prototype.test_connect = function () {
	Database.prototype.mongo_client.connect(Database.prototype.url, function(err, db) {
		console.log("Connected correctly to server.")
		db.close()
	})
}

Database.prototype.insert_item = function (item) {
	Database.prototype.mongo_client.connect(Database.prototype.url, function(err, db) {
		db.collection('reddititems').insertOne(item, function (err, result) {
			db.close()
		})
	})
}

Database.prototype.insert_items = function (items, callback) {
	Database.prototype.mongo_client.connect(Database.prototype.url, function(err, db) {
		db.collection('reddititems').insertMany(items, function (err, result) {
			db.close()
			callback()
		})
	})
}


module.exports = Database
