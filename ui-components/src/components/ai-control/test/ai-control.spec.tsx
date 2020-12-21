import { newSpecPage } from '@stencil/core/testing';
import { AiControl } from '../ai-control';

describe('ai-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AiControl],
      html: `<ai-control></ai-control>`,
    });
    expect(page.root).toEqualHtml(`
      <ai-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ai-control>
    `);
  });
});
