var express = require('express')
var router = express.Router()
var Url = require('../models/Url')

function isURL (str) {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
  if (!regex.test(str)) {
    return false
  } else {
    return true
  }
}

/* GET users listing. */
router.get('/*', function (req, res, next) {
  if (global.db) {
    let url = req.params[0]

    if (!isURL(url)) {
      res.send({
        'error': 'Wrong url format, make sure you have a valid protocol and real site.'
      })
      return
    }

    let host = req.headers['host']
    let id = Math.floor(Math.random() * 99999)

    let result = {
      original_url: url,
      short_url: `https://${host}/${id}`
    }

    let website = {
      id: id,
      url: url
    }

    let collection = db.collection('websites')

    collection.find({'url': url}).toArray((err, documents) => {
      if (err) throw err
      if (documents.length == 0) {
        collection.insert(website, (err, data) => {
          if (err) throw err
          res.send(result)
        })
      } else {
        res.send({
          original_url: url,
          short_url: `https://${host}/${documents[0].id}`
        })
      }
    })
  }
})

module.exports = router
