import { newSpecPage } from '@stencil/core/testing';
import { AiBackdrop } from '../ai-backdrop';

describe('ai-backdrop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AiBackdrop],
      html: `<ai-backdrop></ai-backdrop>`,
    });
    expect(page.root).toEqualHtml(`
      <ai-backdrop>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ai-backdrop>
    `);
  });
});
