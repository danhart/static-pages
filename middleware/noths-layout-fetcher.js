var layoutFetcher = require('layout-fetcher');

var UK_LAYOUT_URL = 'http://www.notonthehighstreet.com/layout';
var DE_LAYOUT_URL = 'http://preview.notonthehighstreet.de/layout';

var determineLayoutUrl = function(hostname) {
    if (hostname.match(/notonthehighstreet\.com/)) {
        return UK_LAYOUT_URL;
    }

    if (hostname.match(/notonthehighstreet\.de/)) {
        return DE_LAYOUT_URL;
    }

    return UK_LAYOUT_URL;
};

module.exports = function(options) {
    return function(req, res, next) {
        layoutFetcher(determineLayoutUrl(req.get('host')), options)(req, res, next);
    };
};
