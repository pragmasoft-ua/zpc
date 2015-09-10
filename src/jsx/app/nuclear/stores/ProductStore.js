'use strict';

var Nuclear = require('nuclear-js')
var toImmutable = Nuclear.toImmutable
var actionTypes = require('../actionTypes')

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({})
  },

  initialize() {
    this.on(actionTypes.RECEIVE_PRODUCTS, receiveProducts)
    this.on(actionTypes.ADD_TO_CART, decrementInventory)
  }
})

function receiveProducts(state, products) {
  console.log(1 + "receiveProducts")
  var newProducts = toImmutable(products)
    .toMap()
    .mapKeys((k, v) => v.get('id'))
  return state.merge(newProducts)
}

function decrementInventory(state, product) {
  return state.update(product.id, product => {
    const currentInventory = product.get('inventory')
    const newInventory = (currentInventory > 0) ? currentInventory - 1 : 0;
    return product.set('inventory', newInventory)
  })
}

