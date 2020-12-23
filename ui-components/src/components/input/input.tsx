import { Component, Host, Prop, Watch, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ai-input',
  styleUrl: 'input.css',
  shadow: false,
})
export class AiInput {
  /**
   * 默认值
   */
  @Prop() defaultValue: string;

  /**
   * 预设文案
   */
  @Prop() placeholder: string = '';

  /**
   * 类型
   */
  @Prop() type: string = 'text';

  /**
   * 输入值
   */
  @Prop({ mutable: true }) value: string = '';

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
  @Event() aiBlur;

  @Watch('value')
  protected valueChanged() {
    this.aiChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.aiInput.emit(ev as KeyboardEvent);
  }

  private onBlur = (ev: FocusEvent) => {
    this.aiBlur.emit(ev)
  }

  render() {
    return (
      <Host>
        <div class={'box'}>
          <input
            class={'ai-input'}
            type={this.type}
            placeholder={this.placeholder}
            onInput={this.onInput}
            value={this.value}
            onBlur={this.onBlur}
          />
        </div>
      </Host>
    );
  }

}
