# ember-query-params-hash

This mixin provides a `queryParamsHash` property within a controller. The `queryParamsHash` property is a JavaScript object that includes keys and values for query parameters defined in the `queryParams` property. Having all the query parameters available in an object is handy in the case that you're passing all the query paramters to a downstream component.

## Installation

`ember install ember-query-params-hash`

## Usage

```
// controllers/application.js
import Ember from 'ember';
import QueryParamsHash from 'ember-query-params-hash/mixins/query-params-hash';

export default Ember.Controller.extend(QueryParamsHash, {
  queryParams: ['pizza', 'cat', 'dog']
});
```

```
{{!-- templates/application.hbs --}}
<ul>
{{#each queryParams as |param|}}
  <li>{{param}}: {{get queryParamsHash param}}</li>
{{/each}}
</ul>
```
