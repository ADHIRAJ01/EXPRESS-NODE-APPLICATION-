const mongoose = require('mongoose');

mongoose.connect( 'mongodb+srv://adhiraj:*****@cluster0.gfbug.mongodb.net/test?authSource=admin&replicaSet=atlas-wgmbxj-shard-0&readPreference=primary&ssl=true',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connection successful WITH REGISTRATION ");
}).catch((err) =>{
    console.log("error = ",err.message)
})