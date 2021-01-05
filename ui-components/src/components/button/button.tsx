import { Component, Host, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ai-button',
  styleUrl: 'button.css',
})
export class AiButton {
  /**
   * 文字
   */
  @Prop() text: string;

  /**
   * 是否禁用
   */
  @Prop({ mutable: true }) disabled: boolean = false;

  /**
   * value
   */
  @Prop({ mutable: true }) value?: any;

  /**
   * 点击
   */
  @Event() aiClick: EventEmitter<MouseEvent>;

  connectedCallback() {
    console.log('btn-value', this.value)
  }

  private handleClick = (event) => {
    if (this.disabled) {
      event.preventDefault()
    } else {
      this.aiClick.emit(event)
    }
  }

  render() {
    return (
      <Host>
        <button
          class={{
            'btn': true,
            'btn-disabled': this.disabled,
          }}
          onClick={this.handleClick}
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
