/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-panes',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/assets/1x1-transparent.png');
  }
};
