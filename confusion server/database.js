//IN THIS FILE WE WILL BE CONNECTING WITH DATABASE 
//CONNECTING TO DATABASE USING MONGOOSE
const mongoose = require('mongoose');
mongoose.connect('mongo://localhost:27017/NEWDATABASE/INFO',{useNewUrlParser: true});

var con = mongoose.connection;

con.on('connected',() => {
    console.log('connected to database');
});

con.on('disconnected',() => {
    console.log('disconnected from database');
});

con.on('error',() => {
    console.error.bind(console, ' connection error ');
})

module.exports = con;