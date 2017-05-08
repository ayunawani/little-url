var express = require('express')
var router = express.Router()
var Url = require('../models/Url')

/* GET users listing. */
router.get('/', function (req, res, next) {
	var id = req.baseUrl.split('/')[1]
	if(+id) {
		var url = global.testDb[id]
		res.redirect(url)
	}
})

module.exports = router
