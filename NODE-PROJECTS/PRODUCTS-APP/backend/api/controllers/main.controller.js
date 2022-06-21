const providers = require('../models/provider.modal');

// CRUD OPERATION  - CREATE(POST) , READ(GET) , UPDATE(PUT) , DELETE(DELETE)


//POST
//uri : /api/providers
module.exports.create = (req, res) => {

}


//GET
//uri  ; /api/providers/:provider
module.exports.readAll = (req, res) => {
    //copying all inner code we wrote in controllers file.
    // then instead of using res.render(....);
    res.send(); // and passing the details in this
};


//GET
//uri :  /providers/:id
module.exports.readOne = (req, res) => {

};


//PUT
//uri l   /providers
module.exports.update = (req, res) => {

};


//DELETE
//uri : /providers/:id
module.exports.deleteOne = (req, res) => {

};


