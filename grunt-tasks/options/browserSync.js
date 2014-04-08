/**
 * SAMPLE tasks configuration
 */

'use strict';

var config = require('../config');

module.exports = {
  bsFiles: {
      src: [
      '_themes/ipt/css/*.css',
      '_themes/ipt/templates/**/*.html'
    ]

  },
  options: {
    watchTask: true,
  }
}