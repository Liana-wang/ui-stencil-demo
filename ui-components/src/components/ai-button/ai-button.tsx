import { Component, Host, Prop, Event, EventEmitter, h } from '@stencil/core';
import './ai-button.css'

@Component({
  tag: 'ai-button',
  styleUrl: 'ai-button.css',
})
export class AiButton {
  @Prop() text: string;
  @Prop({ mutable: true }) disabled: boolean = false;

  @Event() aiClick: EventEmitter<MouseEvent>;

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
        <ai-control>
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
        </ai-control>
      </Host>
    );
  }

}
