var React = require('react')

var Cart = require('../../common/components/Cart.jsx')
var reactor = require('../reactor')
var getters = require('../getters')
var actions = require('../actions')

module.exports = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      products: getters.cartProducts,
      total: getters.cartTotal,
    }
  },

  onCheckoutClicked: function () {
    if (!this.state.products.size) {
      return;
    }
    actions.cartCheckout()
  },

  render: function () {
    return (
      <Cart products={this.state.products.toJS()} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
    );
  },
});
