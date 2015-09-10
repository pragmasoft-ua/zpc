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
      height: 350
    };
  },

  render: function() {
    return (
      <div>
      </div>
    );
  },

  componentDidMount: function() {
    console.log('Radial componentDidMount ');
    var dom =  this.getDOMNode();
    createChart(dom, this.props);
  },

  shouldComponentUpdate: function(nextProps) {
      console.log('Radial shouldComponentUpdate');
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

    var diameter = 960;

    var tree = d3.layout.tree()
        .size([360, diameter / 2 - 120])
        .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

    var diagonal = d3.svg.diagonal.radial()
        .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

    
    var svg = d3.select(dom).append("svg")
        .attr("width", diameter)
        .attr("height", diameter - 150)
      .append("g")
  //      .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
              .attr("transform", "translate(" + diameter / 2 + "," + (diameter - 150) / 2 + ")");

    // d3.json("flare.json", function(error, root) {
    //   if (error) throw error;

      var nodes = tree.nodes(root);
      var links = tree.links(nodes);

      var link = svg.selectAll(".link")
          .data(links)
        .enter().append("path")
          .attr("class", "link")
          .attr("d", diagonal);

      var node = svg.selectAll(".node")
          .data(nodes)
        .enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { 
            return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

      node.append("circle")
          .attr("r", 4.5);

      node.append("text")
          .attr("dy", ".31em")
          .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
          .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
          .text(function(d) { return d.name; });
    // });

      //d3.select(self.frameElement).style("height", diameter - 150 + "px");
  } else {
    d3.select(dom).append('div').text('Cannot find any features');
  }
 
};
