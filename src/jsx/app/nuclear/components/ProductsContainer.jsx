var React = require('react')

var ProductItem = require('../../common/components/ProductItem.jsx')
var ProductsList = require('../../common/components/ProductsList.jsx')

var reactor = require('../reactor')
var getters = require('../getters')
var actions = require('../actions')


const ProductItemContainer = React.createClass({
  onAddToCartClicked() {
    actions.addToCart(this.props.product);
  },

  render() {
    return (
      <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
    );
  }
});

module.exports = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      products: getters.products,
    }
  },

  render: function () {
    return (
      <ProductsList title="Flux Shop Demo (NuclearJS)">
        {this.state.products.map(product => {
          return <ProductItemContainer key={product.get('id')} product={product.toJS()} />;
        }).toList()}
      </ProductsList>
    );
  },
});
