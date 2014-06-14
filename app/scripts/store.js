$.ajaxSetup({
  crossDomain: true
});

EmberCodetails.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
});
