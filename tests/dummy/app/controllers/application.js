import Ember from 'ember';
import QueryParamsHash from 'ember-query-params-hash/mixins/query-params-hash';

export default Ember.Controller.extend(QueryParamsHash, {
  queryParams: ['pizza', 'cat', 'dog']
});
