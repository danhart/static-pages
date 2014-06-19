var express = require('express');
var router = express.Router();
var layoutService = require('../services/layout-service');
var productService = require('../services/product-service');
var PageBuilder = require('page-builder');
var productsHelper = require('../view-helpers/products-helper.js');

// renderProductPage could live in a new layer, but not sure what layer yet!
var renderProductPage = function(res, locals, next) {
    // TODO: Extract these to view helpers
    var js = '<script>require(["/static-pages-assets/scripts/products.js"]);</script>';
    var styles = '<link rel="stylesheet" href="/static-pages-assets/stylesheets/products.css"/>';

    locals.imageUriForSize = productsHelper.imageUriForSize;

    new PageBuilder('products/show', layoutService, res, next).
        setLocals(locals).
        setJavascript(js).
        setStyles(styles).
        render();
};

router.route('/:partner_shortcode/:product_handle').
    all(function(req, res, next) {
        next();
    }).
    get(function(req, res, next) {
        productService.lookup(req.params, next, function(product) {
            if (!product) return next();

            var locals = { product: product };
            renderProductPage(res, locals, next);
        });
    }).
    put(function(req, res, next) {
        console.log(req.body);
        res.send('done');
    });

module.exports = router;
