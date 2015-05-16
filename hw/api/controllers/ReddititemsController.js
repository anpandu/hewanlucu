/**
 * ReddititemsController
 *
 * @description :: Server-side logic for managing reddititems
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
        res.send('hello')
    },
    get:function(req,res) {
		var n = req.param('n')
		var after = req.param('after')
		var param = {
			'is_album' : false,
			'ups' : { "$gt" : 100}
		}
		if (after === undefined) {
			Reddititems.find(param).limit(n).exec( function(err, result) {
				res.json(result)
		    })
		} else {
			Reddititems.find({'r_id':after}).exec( function(err, anchor) {
				if (anchor.length>0) {
					param['created'] = { "$lt" : anchor[0]['created'] }
					Reddititems.find(param).limit(n).exec( function(err, result) {
						res.json(result)
					})	
				}
				else
					res.json([])
		    })
		}
	}
};

