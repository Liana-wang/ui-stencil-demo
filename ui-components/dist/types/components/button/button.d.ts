import { EventEmitter } from '../../stencil-public-runtime';
export declare type Type = 'default' | 'primary' | 'dashed' | 'text' | 'link';
export declare type Size = 'large' | 'small';
export declare type Shap = 'circle' | 'round';
export declare class AiButton {
  /**
   * 类型
   */
  type?: Type;
  /**
   * 设置 button 原生的 type 值
   */
  htmlType?: string;
  /**
   * 尺寸
   */
  size?: Size;
  /**
   * 警告按钮
   */
  danger?: boolean;
  /**
   * 幽灵按钮
   */
  ghost?: boolean;
  /**
   * 适应父元素的宽度
   */
  block?: boolean;
  /**
   * 按钮形状
   */
  shap?: Shap;
  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  href?: string;
  /**
   * 相当于 a 链接的 target 属性，href 存在时生效
   */
  target?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 点击
   */
  aiClick: EventEmitter<MouseEvent>;
  private handleClick;
  render(): any;
}
