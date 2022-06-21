const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PRAsCTndbcwbIwgiuICEDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console,"connection error"));     //when error occured it gives this 

db.once('open', function() {                //when 
    console.log('connected');
  //  console.oog(db.show());
})
//TILL HERE OUR CONNECTION IS ESTABLISHED