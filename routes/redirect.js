var express = require('express')
var router = express.Router()
var Url = require('../models/Url')

/* GET users listing. */
router.get('/', function (req, res, next) {
  var id = req.baseUrl.split('/')[1]
  if (+id > 0) {
    if (global.db) {
      let collection = db.collection('websites')
      collection.find({"id": +id}).toArray((err, documents) => {
        if (err) throw err
       let site = documents[0]
       res.redirect(site.url)
      })
    }
  }
})

module.exports = router
