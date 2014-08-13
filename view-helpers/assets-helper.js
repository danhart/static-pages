var appConfig = require('../app-config');

exports.assetUrl = function(path) {
    return appConfig.assetHost + appConfig.assetPath + path;
};
