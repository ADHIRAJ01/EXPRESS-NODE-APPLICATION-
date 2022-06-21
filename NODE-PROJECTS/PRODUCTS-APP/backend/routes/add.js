const express = require('express');
const  router = express.Router();

const addRouter = require('../conntrollers/details');
router.get('/',addRouter.add);

module.exports = router;