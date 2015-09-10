var React = require('react')

var reactor = require('../reactor')
var getters = require('../getters')
var actions = require('../actions')

module.exports = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      filter: getters.filter,
      features: getters.filteredFeatures
    }
  },

  handleChange: function(e) {
    actions.setSerachFilter(this.refs.searchInput.getValue());
  },

  render: function () {
    return (
                          <FormGroup>
                              <Label htmlFor='searchbtnicon' control sm={3}>Find</Label>
                              <Col sm={9}>
                                <InputGroup>
                                  <Input type='text' id='searchbtnicon' placeholder='Enter keywords here ...' ref="searchInput" onChange={this.handleChange} defaultValue={this.state.filter.get('text')}/>
                                  <InputGroupAddon className='plain' />
                                </InputGroup>
                              </Col>
                            </FormGroup>
    );
  },




});