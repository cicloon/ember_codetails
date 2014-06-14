EmberCodetails.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000',

  ajax: function(url, method, hash) {
    hash = hash || {}; // hash may be undefined
    hash.dataType = 'jsonp'
    return this._super(url, method, hash);
  }

});
