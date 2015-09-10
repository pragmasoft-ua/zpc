var server = require('../common/api/server')
var shop = require('../common/api/shop')
var reactor = require('./reactor')
var actionTypes = require('./actionTypes')
var getters = require('./getters')

exports.fetchProducts = function() {
    shop.getProducts(function(products) {
      reactor.dispatch(actionTypes.RECEIVE_PRODUCTS, products)
    });
}

exports.addToCart = function(product) {
    reactor.dispatch(actionTypes.ADD_TO_CART, product)
}

exports.cartCheckout = function() {
	    const productsInCart = reactor.evaluateToJS(getters.cartProducts)

	    reactor.dispatch(actionTypes.CHECKOUT_START)

	    shop.buyProducts(productsInCart, function() {
	      console.log("YOU BOUGHT: ", productsInCart)

	      reactor.dispatch(actionTypes.CHECKOUT_SUCCESS)

	      // uncomment out to see a rollback when a checkout fails
	      //setTimeout(() => {
	      //reactor.dispatch(CHECKOUT_FAILED)
	      //}, 1000)
	    });
	  }


exports.fetchFeaturesAndTests = function() {
    server.getFeaturesAndTests(function(features) {
      reactor.dispatch(actionTypes.INIT_FEATURES_AND_TESTS, features)
    });
}

exports.setSerachFilter = function(filter) {
	reactor.dispatch(actionTypes.SET_FILTER, filter)
}



