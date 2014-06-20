var env = process.env.NODE_ENV || 'development';

var config = {
    cacheLayout:    false,
    nothsLayoutUrl: 'http://www.notonthehighstreet.com/layout',
    nothsApiUri:    'https://www.notonthehighstreet.com/api',
    loggerMode:     '',
    publicDir:      'build',
    cartCookie:     'production_last_cart'
};

if (env === 'development') {
    config.cacheLayout = true;
    config.loggerMode = 'dev';
    config.publicDir = 'public';
    config.cartCookie = 'development_last_cart';
}

if (process.env.CACHE_LAYOUT) {
    config.cacheLayout = (process.env.CACHE_LAYOUT === "true") ? true : false;
}

if (process.env.LAYOUT) {
    config.nothsLayoutUrl = process.env.LAYOUT;
}

if (process.env.NOTHS_API_TOKEN) {
    config.nothsApiToken = process.env.NOTHS_API_TOKEN;
} else {
    throw "You must provide a NOTHS_API_TOKEN";
}

if (process.env.NOTHS_API_URI) {
    config.nothsApiUri = process.env.NOTHS_API_URI;
}

module.exports = config;
