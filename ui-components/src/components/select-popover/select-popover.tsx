import { Component, ComponentInterface, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'ai-select-popover',
  styleUrl: 'select-popover.css',
  scoped: true,
})
export class SelectPopover implements ComponentInterface {
  /**
   * 选项
   */
  @Prop() options: ReadonlyArray<any> = [];


  @Listen('aiChange')
  onSelect(ev: any) {
    const option = this.options.find(o => o.value === ev.target.value);
    if (option) {
      if (typeof option.handler === 'function') {
        option.handler()
      }
    }
  }

  render() {
    return (
      <Host>
        <ul>
          {
            this.options.map(option =>
              <li class={{ 'selected': option.checked }} onClick={() => option.handler()}>{option.text}</li>
            )
          }
        </ul>
      </Host>
    );
  }

}
