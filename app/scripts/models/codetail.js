EmberCodetails.Codetail =  DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
});

EmberCodetails.Codetail.FIXTURES = [
  {id: 1, title: 'Codetail wadus', description: 'Codetail wadus description'},
  {id: 2, title: 'Codetail foo', description: 'Codetail foo description'},
  {id: 3, title: 'Codetail bar', description: 'Codetail bar description'}
];
