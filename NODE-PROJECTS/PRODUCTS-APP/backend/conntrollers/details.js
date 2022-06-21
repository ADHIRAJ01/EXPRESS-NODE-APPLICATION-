var list = require('../data/list');

module.exports.list = (req , res , next) => {
    var id = req.params.id;

    var providerdetail = list.find(provider => provider.id == id);
    
    console.log(providerdetail , " IS THE DATILS ");

    res.json('details',{
        id:id,
        title: "COMPANY DETAILS",
        provider: providerdetail
    })
    
};

module.exports.page = (req,res)=>{
    res.send("<h1>TYPE ID IN PARAMS TO VIEW THE DETAILS ");
};

module.exports.add = function(req, res, next) {
    
    var details = {
        id:id , 
        name : req.body.name,
        company : req.body.company
    };

    list.push(details);
    res.render('add');
};