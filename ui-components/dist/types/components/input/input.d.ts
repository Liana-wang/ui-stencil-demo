import { EventEmitter } from '../../stencil-public-runtime';
export declare class AiInput {
  /**
   * 是否聚焦
   */
  hasFocus: boolean;
  /**
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 预设文案
   */
  placeholder: string;
  /**
   * 是否只读
   */
  readonly: boolean;
  /**
   * 类型
   */
  type: string;
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
   * 改变值
   */
  aiInput: EventEmitter<KeyboardEvent>;
  /**
   * 失焦
   */
  aiBlur: EventEmitter<void>;
  /**
   * 聚焦
   */
  aiFocus: EventEmitter<void>;
  private onInput;
  /**
   * 失焦
   */
  private onBlur;
  /**
   * 聚焦
   */
  private onFocus;
  /**
   * 获取输入框的值
   */
  private getValue;
  /**
   * 输入框是否有值
   */
  private hasValue;
  render(): any;
}
