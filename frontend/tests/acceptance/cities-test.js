import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'pakathon-website/tests/helpers/start-app';
import Pretender from 'pretender';

var application, server;

module('Acceptance: Cities', {
  setup: function() {
    application = startApp();

    var cities = [
      {id: 1, name: "City One"},
      {id: 2, name: "City Two"},
      {id: 3, name: "City Three"},
    ];

    server = new Pretender(function() {
      this.get('/api/v1/cities', function(request) {
        return [200, {'Content-Type': 'application/json'}, JSON.stringify({cities: cities})];
      });
    });    
  },

  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('Should allow navigation to the cities page from the landing page', function(assert) {
  visit('/').then(function() {
    click('a:contains("Cities")');
  });

  andThen(function() {
    assert.equal(find('h3').text(), "I am a Pakathon City");
  });
});

test('visiting /cities', function(assert) {
  visit('/cities');

  andThen(function() {
    assert.equal(currentPath(), 'cities.index');
    assert.equal(find("h3:contains('I am a Pakathon City')").length, 1);
    assert.equal(find("h3:contains('City One')").length, 1);
    assert.equal(find("h3:contains('City Two')").length, 1);
    assert.equal(find("h3:contains('City Three')").length, 1);
  });
});
