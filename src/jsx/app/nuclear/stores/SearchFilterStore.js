'use strict';

var Nuclear = require('nuclear-js')
var toImmutable = Nuclear.toImmutable
var actionTypes = require('../actionTypes')

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({text: ""})
  },

  initialize() {
    this.on(actionTypes.SET_FILTER, setFilter)
  }
})

function setFilter(state, filter) {
    return toImmutable({text: filter});
}