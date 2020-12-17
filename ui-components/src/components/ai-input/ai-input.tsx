import { Component, Host, Prop, Watch, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ai-input',
  styleUrl: 'ai-input.css',
  shadow: false,
})
export class AiInput {
  @Prop() defaultValue: string;
  @Prop() placeholder: string = '';
  @Prop() type: string = 'text';
  @Prop({ mutable: true }) value: string = '';

  @Event() aiChange!: EventEmitter<any>;

  @Event() aiInput!: EventEmitter<KeyboardEvent>;

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
        <input
          type={this.type}
          placeholder={this.placeholder}
          onInput={this.onInput}
          value={this.defaultValue && !this.value ? this.defaultValue : this.value}
          onBlur={this.onBlur}
        />
      </Host>
    );
  }

}
