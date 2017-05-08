var express = require('express')
var router = express.Router()
var Url = require('../models/Url')

global.testDb = {}


/* GET users listing. */
router.get('/*', function (req, res, next) {
  let url = req.params[0]
  let host = req.headers['host']
  let id = Math.floor(Math.random() * 99999)
  let result = {
    original_url: url,
    short_url: `https://${host}/${id}`
  }

  testDb[id] = url 

  // let urlObj = new Url({
  //   id: id,
  //   url: url
  // })

  // urlObj.save((err) => {
  //   if (err) return console.log(err)
    res.send(result)
  // })
})

module.exports = router
