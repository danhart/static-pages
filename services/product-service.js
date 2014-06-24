var request = require('request');
var appConfig = require('../app-config');

var headers = { 'X-Notonthehighstreet-Token': appConfig.nothsApiToken };

exports.lookup = function(options, error, callback) {
    var uriParam = 'http://noths.com/' + options.partner_shortcode + '/product/' + options.product_handle;

    var requestOptions = {
        url: appConfig.nothsApiUri + '/internal/products/from-uri?uri=' + uriParam,
        headers: headers
    };

    request(requestOptions, function (requestError, res, body) {
        if (requestError || res.statusCode !== 200) {
            return callback(null);
        }

        callback(JSON.parse(body).product);
    });
};
