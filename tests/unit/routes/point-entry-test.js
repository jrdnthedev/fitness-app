import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | point-entry', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:point-entry');
    assert.ok(route);
  });
});
