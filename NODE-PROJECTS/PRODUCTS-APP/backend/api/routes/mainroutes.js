const express = require('express');
const  router = express.Router();

const mainController = require('../controller/main.controller');


router.post('/providers' , mainController.create);

router.get('/providers' , mainController.readAll);

router.get('/providers/:id' , mainController.readOne);

router.put('/providers' , mainController.update);

router.delete('/delete/:id' , mainController.deleteOne);

router.delete('/delete', mainController.delete);