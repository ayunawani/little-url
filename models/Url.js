var mongoose = require('mongoose')

var UrlSchema = mongoose.Schema({
	id: String,
	url: String
})

module.exports = mongoose.model('Url', UrlSchema)