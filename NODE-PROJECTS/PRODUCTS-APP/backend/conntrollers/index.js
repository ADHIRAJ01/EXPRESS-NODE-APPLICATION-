module.exports.indexing =  function(req, res, next) {
    res.render('index', { title: 'Express' , 
        name : 'Adhiraj' });
};