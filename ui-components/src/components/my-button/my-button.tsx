import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
})
export class MyButton {
  @Prop() text: string = '点击'

  render() {
    return (
      <Host>
        <button class={'btn'}>{this.text}</button>
        <slot></slot>
      </Host>
    );
  }

}
