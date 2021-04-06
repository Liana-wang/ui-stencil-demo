import { Component, Host, Prop, Event, EventEmitter, h } from '@stencil/core';

export type Type = 'default' | 'primary' | 'dashed' | 'text' | 'link';

export type Size = 'large' | 'small';

export type Shap = 'circle' | 'round';

@Component({
  tag: 'ai-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class AiButton {
  /**
   * 类型
   */
  @Prop() type?: Type = 'default';

  /**
   * 设置 button 原生的 type 值
   */
  @Prop() htmlType?: string = 'button';

  /**
   * 尺寸
   */
  @Prop() size?: Size;

  /**
   * 警告按钮
   */
  @Prop() danger?: boolean = false;

  /**
   * 幽灵按钮
   */
  @Prop() ghost?: boolean = false;

  /**
   * 适应父元素的宽度
   */
  @Prop() block?: boolean = false;

  /**
   * 按钮形状
   */
  @Prop() shap?: Shap;

  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  @Prop() href?: string;

  /**
   * 相当于 a 链接的 target 属性，href 存在时生效
   */
  @Prop() target?: string;

  /**
   * 是否禁用
   */
  @Prop({ mutable: true }) disabled?: boolean = false;

  /**
   * 点击
   */
  @Event() aiClick: EventEmitter<MouseEvent>;

  private handleClick = (event) => {
    if (this.disabled) {
      event.preventDefault()
    } else {
      this.aiClick.emit(event)
    }
  }

  render() {
    const classes = {
      'btn': true,
      [`btn-${this.type}`]: !!this.type,
      [`btn-ghost`]: this.ghost && this.type !== 'text' && this.type !== 'link',
      [`btn-${this.shap}`]: !!this.shap,
      [`btn-${this.size}`]: !!this.size,
      'btn-block': this.block,
      'btn-dangerous': this.danger,
    }

    if (this.href !== undefined) {
      return <a
        href={this.href}
        target={this.target}
        class={{ ...classes, 'btn-link-disabled': this.disabled }}
        onClick={this.handleClick}
      >
        <slot name={'btn-icon'} />
        <slot></slot>
      </a>
    }

    return (
      <Host>
        <button
          type={this.htmlType}
          disabled={this.disabled}
          class={classes}
          onClick={this.handleClick}
        >
          <slot name={'btn-icon'} />
          <slot></slot>
        </button>
      </Host>
    );
  }

}
