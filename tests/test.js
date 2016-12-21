var test = require('tape');
var lib = require('..');

test('basic', function (assert) {
  assert.plan(1);
  assert.equal(lib.toLatin( 'Б' ), 'B', 'our sample returned correctly');
});
