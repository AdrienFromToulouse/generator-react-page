'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ReactPageGenerator = module.exports = function ReactPageGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ReactPageGenerator, yeoman.generators.Base);


// ReactPageGenerator.prototype.askFor = function askFor() {
//   var cb = this.async();

//   this.prompt([{
//     // type: 'confirm',
//     // name: 'bootstrap',
//     // message: 'Would you like to include Twitter Bootstrap?',
//   default: true
//   }], function (props) {
//     // this.bootstrap = props.bootstrap;

//     cb();
//   }.bind(this));
// };


ReactPageGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/core');
  this.mkdir('app/components');
  this.mkdir('app/components/Banner');
  this.mkdir('app/components/VectorWidget');
  this.mkdir('app/pages');

  this.copy('../../templates/src/index.js', 'app/index.js');

  this.copy('../../templates/src/components/Banner/Banner.js', 'app/components/Banner/Banner.js');
  this.copy('../../templates/src/components/Banner/Banner.css', 'app/components/Banner/Banner.css');
  this.copy('../../templates/src/components/Banner/ReactPageLogo.png', 'app/components/Banner/ReactPageLogo.png');
  this.copy('../../templates/src/components/Banner/ReactPageLogo@2x.png', 'app/components/Banner/ReactPageLogo@2x.png');

  this.copy('../../templates/src/components/VectorWidget/VectorWidget.js', 'app/components/VectorWidget/VectorWidget.js');

  this.copy('../../templates/src/pages/about.js', 'app/pages/about.js');

  this.copy('../../templates/src/core/SiteBoilerPlate.js', 'app/core/SiteBoilerPlate.js');
  this.copy('../../templates/src/core/SiteBoilerPlate.css', 'app/core/SiteBoilerPlate.css');

  this.template('../../templates/common/settings.json', 'settings.json');
  this.template('../../templates/common/_bower.json', 'bower.json');
  this.template('../../templates/common/_package.json', 'package.json');

  this.copy('../../templates/common/Gruntfile.js', 'Gruntfile.js');
};

ReactPageGenerator.prototype.packageFiles = function () {
  this.template('../../templates/common/settings.json', 'settings.json');
  this.template('../../templates/common/_bower.json', 'bower.json');
  this.template('../../templates/common/_package.json', 'package.json');
  // this.template('../../templates/common/Gruntfile.js', 'Gruntfile.js');
};


ReactPageGenerator.prototype.runtime = function runtime() {
  this.template('../../templates/common/root/bowerrc', '.bowerrc');
  this.template('../../templates/common/gitignore', '.gitignore');
};

ReactPageGenerator.prototype.projectfiles = function projectfiles() {
  this.template('../../templates/common/root/editorconfig', '.editorconfig');
  this.template('../../templates/common/root/jshintrc', '.jshintrc');
};
