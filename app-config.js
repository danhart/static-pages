var env = process.env.NODE_ENV || 'development';

var config = {
    cacheLayout: false,
    nothsApiUri: 'https://www.notonthehighstreet.com/api',
    assetUrl:   '//static-pages.notonthehighstreet.com/',
    loggerMode:  ''
};

if (env === 'development') {
    config.cacheLayout = true;
    config.loggerMode = 'dev';
    config.assetUrl = '';
}

if (process.env.CACHE_LAYOUT) {
    config.cacheLayout = (process.env.CACHE_LAYOUT === "true") ? true : false;
}

if (process.env.LAYOUT) {
    config.nothsLayoutUrl = process.env.LAYOUT;
}

if (process.env.ASSET_URL) {
    config.assetUrl = process.env.ASSET_URL;
}

module.exports = config;
