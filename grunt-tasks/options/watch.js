/**
 * WATCH tasks configuration
 */

'use strict';

var config = require('../config');

module.exports = {
  scripts : {
    files: ['_themes/ipt/dev/js/script.js'],
    tasks: ['uglify']
  },
  sass : {
    files: ['_themes/ipt/dev/sass/**/**/*.{sass, scss}'],
    tasks : ['sass','autoprefixer']
  },
  livereload: {
    files: ['_themes/ipt/**/*.html', '_themes/ipt/*.php', '_themes/ipt/dev/js/**/*.{js,json}', '_themes/ipt/css/*.css','_themes/ipt/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
    options: {
      livereload: true
    }
  }
}

/**
hamlstatamic : {
    files: ['haml/*.haml'],
    tasks : ['newer:haml:layouts', 'newer:haml:templates', 'newer:haml:partials']
  },
**/