var request = require('request');
var appConfig = require('../app-config');

var headers = { 'X-Notonthehighstreet-Token': appConfig.nothsApiToken };

exports.get = function(cartKey, error, callback) {
    var requestOptions = {};

    if (cartKey) {
        requestOptions.url = appConfig.nothsApiUri + '/carts/' + cartKey;
    } else {
        requestOptions.url = appConfig.nothsApiUri + '/carts';
        requestOptions.method = "POST";
    }

    requestOptions.headers = headers;

    request(requestOptions, function (requestError, res, body) {
        if (requestError || res.statusCode !== 200) {
            return callback(null);
        }

        callback(JSON.parse(body).cart);
    });
};
