var jade = require('jade');
var path = require('path');

module.exports = function() {
    return function(req, res, next) {
        res.locals.styles = jade.renderFile(path.join(__dirname, '..', 'views', 'layout') + '/styles.jade', res.locals);
        res.locals.javascript = jade.renderFile(path.join(__dirname, '..', 'views', 'layout') + '/javascript.jade', res.locals);
        next();
    };
};
