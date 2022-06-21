var list = require('../data/list');

module.exports.edit = (req, res, next) => {

    //ATER RENDERING THEN CHANGING VALUES 
    var id = req.params.id;

    var editdetails = list.find(providers => providers.id == id);

    editdetails.name = req.body.name;
    editdetails.lname = req.body.lname;
    editdetails.age = req.body.age;
    editdetails.category = req.body.category;
    editdetails.position = req.body.position;
    editdetails.company.name = req.body.cname;
    editdetails.company.date = req.body.cdate;
    editdetails.company.team = req.body.cteam;

    console.log(editdetails , " details ");
    res.render('edit' , { providers: editdetails });
}