'use strict';

var React = require('react');

module.exports = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      width: 300,
      height: 350,
    };
  },

  render: function() {
    return (
      <div>
      </div>
    );
  },

  componentDidMount: function() {
    console.log('Zooma componentDidMount ');
    var dom =  this.getDOMNode();
    createChart(dom, this.props);
  },

  shouldComponentUpdate: function(nextProps) {
    console.log('Zooma shouldComponentUpdate ');
      var dom =  this.getDOMNode();
      createChart(dom, nextProps);
      return false;
  }

});


function createChart(dom, props){
  d3.select(dom).select("svg").remove();
  d3.select(dom).select('div').remove();
      var root = props.data;

if (root.children.length > 0) {
var w = 1120,
    h = 600,
    x = d3.scale.linear().range([0, w]),
    y = d3.scale.linear().range([0, h]);

var vis = d3.select(dom).append("div")
    .attr("class", "chart")
    .style("width", w + "px")
    .style("height", h + "px")
  .append("svg:svg")
    .attr("width", w)
    .attr("height", h);

var partition = d3.layout.partition()
    .value(function(d) { return d.size; });

// d3.json("flare.json", function(root) {

  var g = vis.selectAll("g")
      .data(partition.nodes(root))
    .enter().append("svg:g")
      .attr("transform", function(d) { return "translate(" + x(d.y) + "," + y(d.x) + ")"; })
      .on("click", click);

  var kx = w / root.dx,
      ky = h / 1;

  g.append("svg:rect")
      .attr("width", root.dy * kx)
      .attr("height", function(d) { return d.dx * ky; })
      .attr("class", function(d) { return d.children ? "parent" : "child"; });

  g.append("svg:text")
      .attr("transform", transform)
      .attr("dy", ".35em")
      .style("opacity", function(d) { return d.dx * ky > 12 ? 1 : 0; })
      .text(function(d) { return d.name; })

  d3.select(window)
      .on("click", function() { click(root); })
  
// });

  } else {
    d3.select(dom).append('div').text('Cannot find any tests');
  }

  function click(d) {
    if (!d.children) return;

    kx = (d.y ? w - 40 : w) / (1 - d.y);
    ky = h / d.dx;
    x.domain([d.y, 1]).range([d.y ? 40 : 0, w]);
    y.domain([d.x, d.x + d.dx]);

    var t = g.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .attr("transform", function(d) { return "translate(" + x(d.y) + "," + y(d.x) + ")"; });

    t.select("rect")
        .attr("width", d.dy * kx)
        .attr("height", function(d) { return d.dx * ky; });

    t.select("text")
        .attr("transform", transform)
        .style("opacity", function(d) { return d.dx * ky > 12 ? 1 : 0; });

    d3.event.stopPropagation();
  }

  function transform(d) {
    return "translate(8," + d.dx * ky / 2 + ")";
  } 
};
