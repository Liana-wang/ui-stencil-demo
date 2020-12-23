import { newSpecPage } from '@stencil/core/testing';
import { AiSelect } from '../select';

describe('ai-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AiSelect],
      html: `<ai-select></ai-select>`,
    });
    expect(page.root).toEqualHtml(`
      <ai-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ai-select>
    `);
  });
});
