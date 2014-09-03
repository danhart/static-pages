var testController = require('./controllers/test-controller');

var init = function() {
    if ($('.test_layout').length) testController.init();
};

init();
