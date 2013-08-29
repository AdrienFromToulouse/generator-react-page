'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ReactPageGenerator = module.exports = function ReactPageGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ReactPageGenerator, yeoman.generators.Base);

ReactPageGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

ReactPageGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/src');
  this.mkdir('app/src/pages');

  this.copy('../../templates/common/index.html', 'app/src/index.html');
  this.copy('../../templates/common/welcome.js', 'app/src/pages/welcome.js');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');

  // this.template('Gruntfile.js', 'Gruntfile.js');
};

ReactPageGenerator.prototype.runtime = function runtime() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
};

ReactPageGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
