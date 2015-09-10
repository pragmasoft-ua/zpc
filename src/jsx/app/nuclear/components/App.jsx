'use strict';

var React = require('react')
var CartContainer = require('./CartContainer.jsx')

var ProductsContainer = require('./ProductsContainer.jsx')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <ProductsContainer />
        <CartContainer />
      </div>
    );
  }
});
