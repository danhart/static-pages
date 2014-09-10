var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var bodyParser = require('body-parser');
var browserify = require('browserify-middleware');

var nothsLayoutFetcher = require('./middleware/noths-layout-fetcher');
var appConfig = require('./app-config');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Override jade template engine handler
app.engine('jade', require('jade-layouts').renderFile);

app.use(favicon());

app.use(logger(appConfig.loggerMode));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

if (app.get('env') === 'development') {
    app.use(lessMiddleware(path.join(__dirname, 'client', 'less'), {
        dest: path.join(__dirname, 'public'),
        preprocess: {
            path: function(pathname, req) {
                return pathname.replace('/styles/', '/');
            }
        }
    }));

    app.get('/scripts/main.js', browserify('./client/js/main.js'));
}

app.use(express.static(path.join(__dirname, 'public')));

app.use(nothsLayoutFetcher({
    cacheLayout: appConfig.cacheLayout
}));

// TODO: Extract out as asset management middleware
app.use(function(req, res, next) {
    res.locals.assetUrl = function(path) {
        return appConfig.assetUrl + path;
    };

    next();
});

app.use(require('./middleware/setup-layout')());

app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);

        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
