import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupRenderingTest } from 'my-app/tests/helpers';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Helper | foo/bar-baz', function () {
  setupRenderingTest();

  // TODO: Replace this with your real tests.
  it('renders', async function () {
    this.set('inputValue', '1234');

    await render(hbs`{{foo/bar-baz this.inputValue}}`);

    expect(this.element.textContent.trim()).to.equal('1234');
  });
});
