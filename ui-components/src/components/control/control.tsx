import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ai-control',
  styleUrl: 'control.css',
  shadow: true,
})
export class AiControl {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
