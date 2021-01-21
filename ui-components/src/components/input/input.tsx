import { Component, Host, Prop, State, Watch, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ai-input',
  styleUrl: 'input.css',
  shadow: false,
})
export class AiInput {
  /**
   * 是否聚焦
   */
  @State() hasFocus = false;

  /**
   * 是否禁用
   */
  @Prop() disabled: boolean = false;

  /**
   * 预设文案
   */
  @Prop() placeholder: string = '';

  /**
   * 是否只读
   */
  @Prop() readonly = false;

  /**
   * 类型
   */
  @Prop() type: string = 'text';

  /**
   * 输入值
   */
  @Prop({ mutable: true }) value: string = '';

  @Watch('value')
  protected valueChanged() {
    console.log('value', this.value)
    this.aiChange.emit({ value: this.value })
  }

  /**
   * 值改变
   */
  @Event() aiChange!: EventEmitter<any>;

  /**
   * 改变值
   */
  @Event() aiInput!: EventEmitter<KeyboardEvent>;

  /**
   * 失焦
   */
  @Event() aiBlur!: EventEmitter<void>;

  /**
   * 聚焦
   */
  @Event() aiFocus!: EventEmitter<void>;

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.aiInput.emit(ev as KeyboardEvent);
  }

  /**
   * 失焦
   */
  private onBlur = () => {
    this.hasFocus = false
    this.aiBlur.emit()
  }

  /**
   * 聚焦
   */
  private onFocus = () => {
    this.hasFocus = true
    this.aiFocus.emit()
  }

  /**
   * 获取输入框的值
   */
  private getValue(): string {
    return this.value || ''
  }

  /**
   * 输入框是否有值
   */
  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  render() {
    return (
      <Host
        class={{
          'has-value': this.hasValue(),
          'has-focus': this.hasFocus
        }}>
        <div class={'box'}>
          <input
            class={'ai-input'}
            type={this.type}
            placeholder={this.placeholder}
            onInput={this.onInput}
            value={this.value}
            readOnly={this.readonly}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
          />
        </div>
      </Host>
    );
  }

}
