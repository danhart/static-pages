require.config({
    baseUrl: '/scripts'
});

define(function(require) {
    var testController = require('controllers/test-controller');

    var init = function() {
        if ($('.test_layout').length) testController.init();
    };

    return {
        init: init
    };
});
