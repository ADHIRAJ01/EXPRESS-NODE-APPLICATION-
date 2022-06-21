const express = require('express');
const router = express.Router();
const insertController = require('../controllers/insert-controller');

router.get('/user-form',insertController.userForm);
router.get('/POST',insertController.createdata);

module.exports = router;