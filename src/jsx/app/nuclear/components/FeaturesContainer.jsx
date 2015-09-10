var React = require('react')

var reactor = require('../reactor')
var getters = require('../getters')
var actions = require('../actions')
var RadialTree = require('../../d3/RadialTree.jsx');

module.exports = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      features: getters.filteredFeatures
    }
  },

  render: function () {
    return (
      <div>
      <RadialTree data={this.state.features.toJS()} />
      </div>
    );
  },




});