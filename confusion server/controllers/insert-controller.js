const insertModel = require('../models/insert_model');
module.exports = {
    userForm: function(req, res) {
        res.render('userForm');
    },
    createdata: function(req, res) {
        let inputdata = req.body;
        insertModel.createdata(inputdata,(data)=>{
            res.render('user-form');
            console.log("record was created");
        });
    }
}