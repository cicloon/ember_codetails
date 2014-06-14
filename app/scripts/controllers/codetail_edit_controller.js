EmberCodetails.CodetailEditController = Ember.ObjectController.extend({
  actions: {
    update: function(){
      var controller = this;
      this.get('model').save().then( function(){
        controller.transitionToRoute('codetails.index')
      }.bind(this)  );
    }
  }
});
