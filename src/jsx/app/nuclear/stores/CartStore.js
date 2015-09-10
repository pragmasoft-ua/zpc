'use strict';

var Nuclear = require('nuclear-js')
var toImmutable = Nuclear.toImmutable
var actionTypes = require('../actionTypes')

const initialState = toImmutable({
  itemQty: {},
  pendingCheckout: {}
})

/**
 * CartStores holds the mapping of productId => quantity
 * and also maintains rollback information for the checkout process
 */
module.exports = new Nuclear.Store({
  getInitialState() {
    return initialState
  },

  initialize() {
    this.on(actionTypes.CHECKOUT_START, beginCheckout)
    this.on(actionTypes.CHECKOUT_SUCCESS, finishCheckout)
    this.on(actionTypes.CHECKOUT_FAILED, rollback)
    this.on(actionTypes.ADD_TO_CART, addToCart)
  }
})

function addToCart(state, product) {
  return (state.hasIn(['itemQty', product.id]))
    ? state.updateIn(['itemQty', product.id], quantity => quantity + 1)
    : state.setIn(['itemQty', product.id], 1)
}

function beginCheckout(state) {
  const currentItems = state.get('itemQty')

  return state
  .set('itemQty', toImmutable({}))
  .set('pendingCheckout', currentItems)
}

function finishCheckout(state) {
  return initialState
}

function rollback(state) {
  return state
  .set('itemQty', state.get('pendingCheckout'))
  .set('pendingCheckout', toImmutable({}))
}
