'use strict';

/* Initialize Nuclear */
var reactor = require('./nuclear/reactor')
var actions = require('./nuclear/actions')

var cartStore = require('./nuclear/stores/CartStore')
var productStore = require('./nuclear/stores/ProductStore')
var featuresStore = require('./nuclear/stores/FeaturesStore')
var searchFilterStore = require('./nuclear/stores/SearchFilterStore')
var testsStore = require('./nuclear/stores/TestsStore')

reactor.registerStores({
  cart: cartStore,
  products: productStore,
  features: featuresStore,
  filter: searchFilterStore,
  tests: testsStore
})

actions.fetchFeaturesAndTests();
actions.fetchProducts();