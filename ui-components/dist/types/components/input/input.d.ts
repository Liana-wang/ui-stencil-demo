import { EventEmitter, JSX } from '../../stencil-public-runtime';
export declare type Size = 'large' | 'middle' | 'small';
export declare class AiInput {
  /**
   * 是否聚焦
   */
  focused?: boolean;
  /**
   * 可以点击清除图标删除内容
   */
  allowClear?: boolean;
  /**
   * 是否有边框
   */
  bordered?: boolean;
  /**
   * 输入框默认内容
   */
  defaultValue?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 是否带有前缀的 input
   */
  hasPrefix?: boolean;
  /**
   * 是否带有后缀的 input
   */
  hasSuffix?: JSX.Element;
  /**
   * 预设文案
   */
  placeholder?: string;
  /**
   * 是否只读
   */
  readonly?: boolean;
  /**
   * 输入值
   */
  value: string;
  protected valueChanged(): void;
  /**
   * 值改变
   */
  aiChange: EventEmitter<any>;
  /**
   * 按下回车的回调
   */
  aiPressEnter: EventEmitter<KeyboardEvent>;
  /**
   * 改变值
   */
  aiInput: EventEmitter<KeyboardEvent>;
  /**
   * 失焦
   */
  aiBlur: EventEmitter<MouseEvent>;
  /**
   * 聚焦
   */
  aiFocus: EventEmitter<MouseEvent>;
  /**
   * input的ref
   */
  input: HTMLInputElement;
  connectedCallback(): void;
  /**
   * 输入值改变
   */
  private onInput;
  /**
   * 点击清除按钮
   */
  private onClear;
  /**
   * 失焦
   */
  private onBlur;
  /**
   * 聚焦
   */
  private onFocus;
  /**
   * 按下键盘键
   */
  private handleKeyDown;
  render(): any;
}
