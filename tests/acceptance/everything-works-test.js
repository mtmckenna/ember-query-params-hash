import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | everything works');

test('queryParam values can be pulled from the hash', function(assert) {
  visit('/?pizza=good&cat=friend&unknownParam=scoop&dog=also-friend');

  andThen(function() {
    assert.equal(currentURL(), '/?pizza=good&cat=friend&unknownParam=scoop&dog=also-friend');
    assert.notEqual($('body').text().indexOf('pizza: good'), -1);
    assert.notEqual($('body').text().indexOf('cat: friend'), -1);
    assert.equal($('body').text().indexOf('unknownParam: scoop'), -1);

    visit('/?pizza=good&cat=friend&dog=also-friend');

    andThen(function() {
      assert.equal(currentURL(), '/?pizza=good&cat=friend&dog=also-friend');
      assert.notEqual($('body').text().indexOf('pizza: good'), -1);
      assert.notEqual($('body').text().indexOf('cat: friend'), -1);
      assert.notEqual($('body').text().indexOf('dog: also-friend'), -1);
      assert.equal($('body').text().indexOf('unknownParam: scoop'), -1);
    });
  });
});
