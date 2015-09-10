exports.products = ['products']

exports.cartProducts = [
  ['products'],
  ['cart', 'itemQty'],
  function(products, itemQty) {
    return itemQty.map(function(quantity, productId) {
      var product = products.get(productId)
      return product
        .set('quantity', quantity)
        .remove('inventory') // inventory shouldnt be known in cart
    }).toList()
  }
]

exports.cartTotal = [
  exports.cartProducts,
  function(items) {
    const total = items.reduce(function(total, item) {
      return total + (item.get('quantity')* item.get('price'))
    }, 0) || 0
    return total.toFixed(2)
  }
]


exports.features = ['features']
exports.filter = ['filter']

exports.filteredFeatures = [
  ['features'], ['filter'],
  function(features, filter) {
    var featureArray = features.get('children');

    var filteredFeatureArray = featureArray.filter(function(feature) {
      return feature.get('name').indexOf(this.filter) > -1;
    }, {filter: filter.get('text')});

    var result = features.set('children', filteredFeatureArray)
    return result;
  }
]


exports.filteredTests = [
  ['tests'], ['filter'],
  function(tests, filter) {
    var testsArray = tests.get('children');

    var filteredTestArray = testsArray.filter(function(test) {
      return test.get('name').indexOf(this.filter) > -1;
    }, {filter: filter.get('text')});

    var result = tests.set('children', filteredTestArray)
     return result;
  }
]