EmberCodetails.CodetailEditController = Ember.ObjectController.extend({
  actions: {
    update: function(){
      var controller = this;
      this.get('model').save().then( function(){
        EmberCodetails.FlashQueue.pushFlash('notice', '¡CodeTail guardado correctamente!');
        controller.transitionToRoute('codetails.index');
      }.bind(this)  );
    }
  }
});
