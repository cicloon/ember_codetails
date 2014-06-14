EmberCodetails.CodetailsRoute = Ember.Route.extend({
  model: function(){
    return [
      {title: 'Codetail wadus', description: 'Codetail wadus description' },
      {title: 'Codetail foo', description: 'Codetail foo description'},
      {title: 'Codetail bar', description: 'Codetail bar description'}
    ]
  }
})
