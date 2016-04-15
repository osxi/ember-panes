import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pane-separator', 'Integration | Component | pane separator', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{pane-separator}}`);

  assert.equal(this.$().text().trim(), '---');
});
