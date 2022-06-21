const  express = require("express");
const  router = express.Router();
const providerlist = require("../conntrollers/providerlist")

router.get('/', providerlist.list);

module.exports = router;