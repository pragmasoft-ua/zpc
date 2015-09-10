var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var FeaturesContainer = require('../../nuclear/components/FeaturesContainer.jsx');
var SearchContainer = require('../../nuclear/components/SearchContainer.jsx');

var Body = React.createClass({

  render: function() {

    
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody className='text-center'>
                      <SearchContainer />
                      <FeaturesContainer />
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
