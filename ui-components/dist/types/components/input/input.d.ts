import { EventEmitter } from '../../stencil-public-runtime';
export declare class AiInput {
  /**
   * 默认值
   */
  defaultValue: string;
  /**
   * 预设文案
   */
  placeholder: string;
  /**
   * 类型
   */
  type: string;
  /**
   * 输入值
   */
  value: string;
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
  aiBlur: any;
  protected valueChanged(): void;
  private onInput;
  private onBlur;
  render(): any;
}
