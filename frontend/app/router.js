import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('cities', function() {
    this.route('show', {path: ':id'});
  });
  // this.route('cities');
});
