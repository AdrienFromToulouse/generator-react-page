"use strict";

var React = require('React');
var SiteBoilerPlate = require('../core/SiteBoilerPlate.js');
var Banner = require('../components/Banner/Banner.js');

var <%= name %>  = React.createClass({

  render: function() {
    return (
      <SiteBoilerPlate>
        <Banner bannerMessage="Blank Page"/>
      </SiteBoilerPlate>
    );
  }
});

module.exports = <%= name %> ;
