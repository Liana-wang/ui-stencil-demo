import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
})
export class MyButton {
  @Prop() text: string;

  // @Event() click: EventEmitter<any>;

  // private handleclick = (event) => {
  //   this.click.emit(event)
  // }

  render() {
    return (
      <Host>
        <button
          class={'btn'}
        // onClick={this.handleclick}
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
