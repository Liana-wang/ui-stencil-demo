import { newSpecPage } from '@stencil/core/testing';
import { AiPopover } from '../ai-popover';

describe('ai-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AiPopover],
      html: `<ai-popover></ai-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <ai-popover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ai-popover>
    `);
  });
});
