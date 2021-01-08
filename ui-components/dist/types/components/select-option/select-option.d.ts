import { ComponentInterface } from '../../stencil-public-runtime';
export declare class AiSelectOption implements ComponentInterface {
  private inputId;
  el: HTMLElement;
  /**
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 选项的value
   */
  option?: any | null;
  render(): any;
}
