var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(process.cwd() + '/public/html/index.html')
});

module.exports = router;
