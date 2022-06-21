var list = require('../data/list');

module.exports.list = function(req, res, next) {
    res.render('list', {
        provider :list          //data passed
    });
}
