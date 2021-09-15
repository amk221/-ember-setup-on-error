import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, setupOnerror, resetOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | my-component', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (assert) {
    setupOnerror((error) => {
      if (error.message.match('check failed')) {
        assert.step('asserts correct usage of component');
        return;
      }

      throw error;
    });
  });

  hooks.afterEach(function () {
    resetOnerror();
  });

  test('it throws an error if check fails', async function (assert) {
    await render(hbs`<MyComponent />`);

    await click('button');

    assert.verifySteps(['asserts correct usage of component']);
  });
});
