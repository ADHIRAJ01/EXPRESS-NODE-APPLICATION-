const express = require('express');
const app = require('../app');
const router = express.Router();

const {authPage , authcourse } = require('../middleware/authpage');

const permitted = require('../data/permission');

const detailRouter = require('../conntrollers/details');

router.get('/' , detailRouter.page);

// console.log("permitted = ",permitted);

//HERE WE ARE DOING AUTHENTICATION BY USING authPage as doing authentication
router.get('/:id',authPage(permitted), detailRouter.list);
//inside permitted passing category whom to authenticate

module.exports = router;