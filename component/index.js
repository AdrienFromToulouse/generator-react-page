'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the component subgenerator with the argument ' + this.name + '.');

};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype.files = function files() {

  var dirname = this.name;
  var name = this.name + '.js';

  this.mkdir('app/components/'+dirname);
 
  this.template('../../templates/scaffold/component.js', 'app/components/'+dirname+'/'+name);
};
