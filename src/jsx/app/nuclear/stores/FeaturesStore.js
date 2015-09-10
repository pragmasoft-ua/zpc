'use strict';

var Nuclear = require('nuclear-js')
var toImmutable = Nuclear.toImmutable
var actionTypes = require('../actionTypes')

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({
    "name": "Features",
    "children": []
  })
  },

  initialize() {
    this.on(actionTypes.INIT_FEATURES_AND_TESTS, initFeatures)
  }
})

function initFeatures(state, featuresAndTests) {
  var features = featuresAndTests.features;
  var tests = featuresAndTests.tests;
  
  var featureChildren = [];

  for(var i=0, j=features.length; i<j; i++) {
    featureChildren.push(_generateFeature(features[i], tests));
  };


  return state.set('children', toImmutable(featureChildren));

  function _generateFeature(feature, tests) {
    var featureName = feature.name;
    var featureTests = feature.tests;
    var result = {name: featureName, children: []};
    for(var i=0, j=featureTests.length; i<j; i++) {
      var testId = featureTests[i];
      result.children[i] = {name: tests[testId].name, size: 1};
    }
    return result;
  }

}