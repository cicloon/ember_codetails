EmberCodetails.Router.map(function () {
  this.resource('codetails', function(){
    this.resource('codetail', {path: ":codetail_id"})
  });
});
