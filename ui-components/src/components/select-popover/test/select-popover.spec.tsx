import { newSpecPage } from '@stencil/core/testing';
import { SelectPopover } from '../select-popover';

describe('select-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectPopover],
      html: `<select-popover></select-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <select-popover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </select-popover>
    `);
  });
});
