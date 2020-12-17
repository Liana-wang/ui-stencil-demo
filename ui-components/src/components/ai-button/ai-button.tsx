import { Component, Host, Prop, h } from '@stencil/core';
import './ai-button.css'

@Component({
  tag: 'ai-button',
  styleUrl: 'ai-button.css',
})
export class AiButton {
  @Prop() text: string;

  render() {
    return (
      <Host>
        <button
          class={'btn'}
        >
          <slot name={'btn-icon'} />
          {
            this.text ? this.text : <slot></slot>
          }
        </button>
      </Host>
    );
  }

}
