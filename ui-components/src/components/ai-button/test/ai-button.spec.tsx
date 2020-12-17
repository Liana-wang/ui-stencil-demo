import { newSpecPage } from '@stencil/core/testing';
import { AiButton } from '../ai-button';

describe('ai-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AiButton],
      html: `<ai-button></ai-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ai-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ai-button>
    `);
  });
});
