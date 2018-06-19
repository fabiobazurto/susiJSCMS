import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | listmovies', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /listmovies', async function(assert) {

    server.createList('entry', 5);
    visit('/entries');
    andThen(function() {
      equal(currentRouteName(), 'entries');
      equal( find('p').length, 5 );
    });

  });


});
