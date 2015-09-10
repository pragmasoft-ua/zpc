var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var d3 = require('d3');
var PieChart = require('../../d3/D3PieChart.jsx');


var Body = React.createClass({

  getDefaultProps: function() {
    return {data: [
    {name: "Apples", count: 10},
    {name: "Oranges", count: 20},
    {name: "Bananas", count: 5},
    {name: "Blueberries", count: 42},
    {name: "mangoes ", count: 29}  
  ]};
  },

  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody className='text-center'>
                    <p>BLANK PAGE</p>
                      <p>3 test</p>
                      <PieChart data={this.props.data} title="Sample Fruits12"/>
                    <p>BLANK PAGE</p>

                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var Page = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = React.addons.classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
});

module.exports = Page;
