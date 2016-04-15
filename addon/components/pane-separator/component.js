import Ember from 'ember';
import layout from './template';

const { $ } = Ember;

export default Ember.Component.extend({
  attributeBindings: ['draggable'],
  classNames: ['pane-separator'],
  draggable: true,
  layout,
  startX: null,
  startY: null,

  dragStart(e) {
    let { x: startX, y: startY } = e.originalEvent;
    let dragImage = $('<img>').get(0);

    dragImage.src = 'assets/1x1-transparent.png';

    e.dataTransfer.setDragImage(dragImage, 0, 0);

    this.setProperties({startX, startY, isDragging: true});
  },

  dragEnd(e) {
    let { y: endY } = e.originalEvent;
    let { startY, top } = this.getProperties('startY', 'top');

    this.set('isDragging', false);

    this.sendAction('updateY', startY, endY, top);
  },
});
