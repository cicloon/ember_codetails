EmberCodetails.CodetailsRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('codetail');
  }
})
