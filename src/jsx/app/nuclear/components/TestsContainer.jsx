var React = require('react')

var reactor = require('../reactor')
var getters = require('../getters')
var actions = require('../actions')
var ZoomablePartition = require('../../d3/ZoomablePartition.jsx');

module.exports = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      tests: getters.filteredTests
    }
  },

  render: function () {
    return (
      <div>
      <ZoomablePartition data={this.state.tests.toJS()} />
      </div>
    );
  },




});