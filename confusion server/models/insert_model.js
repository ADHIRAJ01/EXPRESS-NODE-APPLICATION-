var mongoose = require('mongoose');
var db = require('../database');

var schema = new mongoose.Schema({
    name: String,
    age: Number,
    country: String , 
    state: String,
    phn: Number
});

userTable = mongoose.model('users',schema);

module.exports = {
    createdata: function(inputdata , callback) {
        userdata = new userTable(inputdata);

        userdata.save(function(err , data) {
            if(err) throw err;
            return callback(data);
        });
        
    }
}

/* -------------------------------UNDERTANDING----------------------------------------------------------------
mongoose to build connection

importing database , what will happen 

defining schema which is used to store type of data before storing into databasse

userTable = modeling schema into a variable to give it a model

NOE exporting module under which we build a function createdata which is called from other side and it stores the inputdata which is received 
then that data is added to userdata by the model defined and then userdata.save returning either data or error occurred.

*/