import { newSpecPage } from '@stencil/core/testing';
import { AiInput } from '../input';

describe('ai-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AiInput],
      html: `<ai-input></ai-input>`,
    });
    expect(page.root).toEqualHtml(`
      <ai-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ai-input>
    `);
  });
});
