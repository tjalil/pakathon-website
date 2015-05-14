import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'pakathon-website/tests/helpers/start-app';

var application;

module('Acceptance: Cities', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /cities', function(assert) {
  visit('/cities');

  andThen(function() {
    assert.equal(currentURL(), '/cities');
  });
});
