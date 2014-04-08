/**
 * Sass taks configuration
 */

'use strict';

var config = require('../config');

module.exports = {
  dev: {
    files: {
      '_themes/ipt/css/ipt.css':'_themes/ipt/dev/sass/style.sass'
    },
    options: {
      lineNumbers: true,
      sourcemap: true,
      loadPath: 'bower_components'
    }
  }
}