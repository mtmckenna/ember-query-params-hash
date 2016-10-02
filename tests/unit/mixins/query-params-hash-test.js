import Ember from 'ember';
import QueryParamsHashMixin from 'ember-query-params-hash/mixins/query-params-hash';
import { module, test } from 'qunit';

module('Unit | Mixin | query params hash');

// Replace this with your real tests.
test('it works', function(assert) {
  let QueryParamsHashObject = Ember.Object.extend(QueryParamsHashMixin);
  let subject = QueryParamsHashObject.create();
  assert.ok(subject);
});
