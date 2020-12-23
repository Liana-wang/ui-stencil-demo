import { newSpecPage } from '@stencil/core/testing';
import { SelectOption } from '../select-option';

describe('select-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: `<select-option></select-option>`,
    });
    expect(page.root).toEqualHtml(`
      <select-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </select-option>
    `);
  });
});
