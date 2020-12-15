import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
})
export class MyButton {
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
