const bodyParser = require('body-parser');
const express = require('express');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Context-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send all dishes to you ');
})
.put((req,res,next) => {
    res.end('put server working ');
})
.post( (req,res,next) => {
    res.end('will add detail '+ req.body.name+ ' with description '+req.body.description);
})
.delete((req,res,next) => {
    res.end('deletion not supported');
});

module.exports = dishRouter;
