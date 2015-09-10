'use strict';

var _features = require('./featuresWords.json');
var _tests = require('./testsWords.json');

var TIMEOUT = 100;

exports.getFeaturesAndTests = function (cb, timeout) {
    timeout = timeout || TIMEOUT;
    setTimeout(function () {
        cb({features: _features, tests: _tests});
    }, timeout);
};
