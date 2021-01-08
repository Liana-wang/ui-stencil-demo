import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ai-select-option',
  shadow: true,
  styleUrl: './select-option.css'
})
export class AiSelectOption implements ComponentInterface {

  private inputId = `ai-selopt-${selectOptionIds++}`;

  @Element() el!: HTMLElement;

  /**
   * 是否禁用
   */
  @Prop() disabled = false;

  /**
   * 选项的value
   */
  @Prop() option?: any | null;

  render() {
    return (
      <Host
        role="option"
        id={this.inputId}
      >
      </Host>
    );
  }
}

let selectOptionIds = 0;
