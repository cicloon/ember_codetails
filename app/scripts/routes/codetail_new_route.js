EmberCodetails.CodetailsNewRoute = Ember.Route.extend({
  model: function(){
    return this.store.createRecord('codetail');
  }
})
