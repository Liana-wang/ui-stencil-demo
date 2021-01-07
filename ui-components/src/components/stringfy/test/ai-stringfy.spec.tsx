import { newSpecPage } from '@stencil/core/testing';
import { AiStringfy } from '../ai-stringfy';

describe('ai-stringfy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AiStringfy],
      html: `<ai-stringfy></ai-stringfy>`,
    });
    expect(page.root).toEqualHtml(`
      <ai-stringfy>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ai-stringfy>
    `);
  });
});
