import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pane-container', 'Integration | Component | pane container', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{pane-container}}`);

  let text = this.$().text().trim();

  assert.equal(text.includes("Top panel content."), true, 'Top pane text exists');
  assert.equal(text.includes("Bottom panel content."), true, 'bottom pane text exists');
});
