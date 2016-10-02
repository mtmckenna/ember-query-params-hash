import Ember from 'ember';

export default Ember.Mixin.create({
  queryParamsHash: Ember.computed(function() {
    let params = this.get('queryParams');
    return params.reduce((hash, attribute) => {
      hash[attribute] = this.get(attribute);
      return hash;
    }, {});
  }).volatile()
});
