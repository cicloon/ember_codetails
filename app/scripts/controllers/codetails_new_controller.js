EmberCodetails.CodetailsNewController = Ember.ObjectController.extend({
  actions: {
    create: function(){
      var controller = this;
      this.get('model').save().then( function(){
        controller.transitionToRoute('codetails.index')
      }.bind(this)  );
    }
  }
});
