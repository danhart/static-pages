var accounting = require('accounting');
var jade = require('jade');

exports.formatMoney = function(cents, currency) {
    var amount = accounting.formatMoney(cents / 100, {
        symbol: '',
        precision: 2,
        decimal : ".",
        thousand: '.',
        format: '%v'
    });

    return jade.renderFile(__dirname + '/../views/partials/price.jade', {
        currency_symbol: exports.symbolForCurrency(currency),
        amount: amount,
        symbol_position: 'before'
    });
};

exports.symbolForCurrency = function(currency) {
    switch (currency) {
        case 'GBP':
            return '£';
        case 'USD':
            return '$';
        case 'AUD':
            return '$';
        case 'EUR':
            return '€';
    }
};
