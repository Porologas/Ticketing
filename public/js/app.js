App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.extend({
    url: 'http://localhost:3000',
    plurals:{
    	staff: 'staffs'
    }
  })
});


App.Router.map(function() {
  this.resource('users', function(){
  	this.resource('user', { path: ':user_id' })
  });

  this.resource('staffs', function(){
  	this.resource('staff', { path:':staffs_id' })
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.StaffsRoute = Ember.Route.extend({
	model: function(){
		return App.Staff.find();
	}
})

App.Staff = DS.Model.extend({
    fullname: DS.attr('string'),
	userdesignation: DS.attr('string'),
	phone: DS.attr('string'),
	lastactivity: DS.attr('number'),
});


//Required
 App.UsersRoute = Ember.Route.extend({
   model: function(){
   	return App.User.find();
   }
 });

//Required
App.User = DS.Model.extend({
    fullname: DS.attr('string'),
	userdesignation: DS.attr('string'),
	phone: DS.attr('string')
});

Ember.Handlebars.registerBoundHelper('dateUnixConvert', function(unixDate) {
  return moment.unix(unixDate).fromNow();
});

// App.User.FIXTURES = [{
// 	id:1,
// 	fullname: "Hello World",
// 	userdesignation: "blah",
// 	phone: "some numbers"
// }, {
// 	id:2,
// 	fullname: "22222Hello World",
// 	userdesignation: "2222blah",
// 	phone: "22222 some numbers"
// }];