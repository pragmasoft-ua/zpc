'use strict';

var Nuclear = require('nuclear-js')
var toImmutable = Nuclear.toImmutable
var actionTypes = require('../actionTypes')

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({
    "name": "Tests",
    "children": []
  })
  },

  initialize() {
    this.on(actionTypes.INIT_FEATURES_AND_TESTS, initTests)
  }
})

function initTests(state, featuresAndTests) {
  var features = featuresAndTests.features;
  var tests = featuresAndTests.tests;
  
  var testChildren = [];

  for(var i=0, j=tests.length; i<j; i++) {
    testChildren.push(_generateTest(tests[i], features));
  };

  return state.set('children', toImmutable(testChildren));

    function _generateTest(test, features) {
      var testName = test.name;
      var testFeatures = test.features;
      var result = {name: testName, children: []};
      for(var i=0, j=testFeatures.length; i<j; i++) {
        var featureId = testFeatures[i];
        result.children[i] = {name: features[featureId].name, size: 1};
      }
      return result;
    }

}