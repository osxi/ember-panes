import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNames: ['pane-container'],

  actions: {
    updateY(startY, endY, top) {
      let diff = endY - startY;
      let $top = this.$(top);
      let currentHeight = $top.height();

      $top.css('height', currentHeight + diff);
    }
  }
});
