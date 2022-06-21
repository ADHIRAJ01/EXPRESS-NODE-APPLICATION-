const express = require('express');
const router = express.Router();

const  editRouter = require("../conntrollers/edit");

// router.get('/' , editRouter.edit);

router.get('/:id' , editRouter.edit);

module.exports = router;