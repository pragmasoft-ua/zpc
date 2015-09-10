/**
 * Mocking client-server processing
 */
'use strict';

var _products = require('./products.json');

var TIMEOUT = 100;

exports.getProducts = function (cb, timeout) {
    timeout = timeout || TIMEOUT;
    setTimeout(function () {
        cb(_products);
    }, timeout);
};

exports.buyProducts = function (payload, cb, timeout) {
    timeout = timeout || TIMEOUT;
    setTimeout(function () {
        cb();
    }, timeout);
};
