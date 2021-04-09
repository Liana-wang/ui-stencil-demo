import { Component, Host, Prop, State, Watch, Event, EventEmitter, h, JSX } from '@stencil/core';

export type Size = 'large' | 'middle' | 'small'
@Component({
  tag: 'ai-input',
  styleUrl: 'input.css',
  shadow: true,
})
export class AiInput {
  /**
   * 是否聚焦
   */
  @State() focused?= false;

  /**
   * 可以点击清除图标删除内容
   */
  @Prop() allowClear?: boolean;

  /**
   * 是否有边框
   */
  @Prop() bordered?: boolean = true;

  /**
   * 输入框默认内容
   */
  @Prop() defaultValue?: string;

  /**
   * 是否禁用
   */
  @Prop({ mutable: true }) disabled?: boolean = false;

  /**
   * 最大长度
   */
  @Prop() maxLength?: number;

  /**
   * 是否带有前缀的 input
   */
  @Prop() hasPrefix?: boolean;

  /**
   * 是否带有后缀的 input
   */
  @Prop() hasSuffix?: JSX.Element;

  /**
   * 预设文案
   */
  @Prop() placeholder?: string = '';

  /**
   * 是否只读
   */
  @Prop() readonly?= false;

  /**
   * 输入值
   */
  @Prop({ mutable: true }) value: string = '';

  @Watch('value')
  protected valueChanged() {
    this.aiChange.emit({ value: this.value })
  }

  /**
   * 值改变
   */
  @Event() aiChange!: EventEmitter<any>;

  /**
   * 按下回车的回调
   */
  @Event() aiPressEnter!: EventEmitter<KeyboardEvent>;

  /**
   * 改变值
   */
  @Event() aiInput!: EventEmitter<KeyboardEvent>;

  /**
   * 失焦
   */
  @Event() aiBlur!: EventEmitter<MouseEvent>;

  /**
   * 聚焦
   */
  @Event() aiFocus!: EventEmitter<MouseEvent>;

  /**
   * input的ref
   */
  input: HTMLInputElement;

  connectedCallback() {
    this.value = typeof this.defaultValue !== 'undefined' ? this.defaultValue : this.value
  }

  /**
   * 输入值改变
   */
  private onInput = (ev: KeyboardEvent) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.aiInput.emit(ev as KeyboardEvent);
  }

  /**
   * 点击清除按钮
   */
  private onClear = () => {
    this.value = ''
    this.input.focus()
  }

  /**
   * 失焦
   */
  private onBlur = (e: MouseEvent) => {
    this.focused = false
    this.aiBlur.emit(e)
  }

  /**
   * 聚焦
   */
  private onFocus = (e: MouseEvent) => {
    this.focused = true
    this.aiFocus.emit(e)
  }

  /**
   * 按下键盘键
   */
  private handleKeyDown = (e: KeyboardEvent) => {
    if (this.aiPressEnter && e.keyCode === 13) {
      this.aiPressEnter.emit(e)
    }
  }

  render() {
    const renderInput = () => (
      <input
        ref={(input) => this.input = input}
        class={'ai-input'}
        type={'text'}
        placeholder={this.placeholder}
        onInput={this.onInput}
        value={this.value}
        disabled={this.disabled}
        readOnly={this.readonly}
        maxLength={this.maxLength}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onKeyDown={this.handleKeyDown}
      />
    )

    return (
      <Host>
        <span class={{
          'input-affix-wrapper': true,
          'input-affix-wrapper-focus': this.focused,
          'input-disabled': this.disabled,
          'input-boderless': !this.bordered,
        }}>
          {this.hasPrefix && <span class='input-prefix'><slot name='prefix'></slot></span>}
          {renderInput()}
          {this.allowClear && this.value !== '' && <span class='input-clear-icon' onClick={this.onClear}>x</span>}
          {this.hasSuffix && <span class='input-suffix'><slot name='suffix'></slot></span>}
        </span>
      </Host>
    );
  }

}
