var jade = require('jade');
var path = require('path');
var assetsHelper = require('../view-helpers/assets-helper');

var locals = {
    assetUrl: assetsHelper.assetUrl
};

module.exports = function() {
    return function(req, res, next) {
        res.locals.styles = jade.renderFile(path.join(__dirname, '..', 'views', 'layout') + '/styles.jade', locals);
        res.locals.javascript = jade.renderFile(path.join(__dirname, '..', 'views', 'layout') + '/javascript.jade', locals);
        next();
    };
};
