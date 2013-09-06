"use strict";

var React = require('React');

/**
 * This is it. 
 */
var <%= name %> = React.createClass({
  getInitialState: function() {
    return {initialized: false};
  },
  componentDidMount: function() {
    this.setState({initialized: true});
  },
  render: function() {
    var classes = '<%= name %>';
    return (
      <h1 class={classes}>
        Hello!
      </h1>
    );
  }
});

module.exports = <%= name %>;
