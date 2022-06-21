var express = require('express');
var router = express.Router();

var indexrouting = require('../conntrollers/index');

/* GET home page. */
router.get('/', indexrouting.indexing);

module.exports = router;
