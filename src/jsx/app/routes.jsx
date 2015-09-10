/* ERROR PAGES */
var notfound = require('./routes/notfound.jsx');

/* APP PAGES */
var blank = require('./routes/app/blank.jsx');
var d3test = require('./routes/app/d3test.jsx');
var d3radialTree = require('./routes/app/d3RadialTree.jsx');

var d3ZoomablePartition = require('./routes/app/d3ZoomablePartition.jsx');
var features = require('./routes/app/features.jsx');
var tests = require('./routes/app/tests.jsx');


/* ROUTES */
module.exports = (
  <Route handler={ReactRouter.RouteHandler}>
    <DefaultRoute handler={features} />
    <Route path='/' handler={features} />
    <Route path='/test' handler={blank} />
    <Route path='/d3test' handler={d3test} />
    <Route path='/d3radialTree' handler={d3radialTree} />
    <Route path='/d3ZoomablePartition' handler={d3ZoomablePartition} />
    <Route path='/features' handler={features} />
    <Route path='/tests' handler={tests} />
    <NotFoundRoute handler={notfound} />
  </Route>
);
