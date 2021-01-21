import { EventEmitter } from '../../stencil-public-runtime';
export declare class AiButton {
  /**
   * 文字
   */
  text: string;
  /**
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 点击
   */
  aiClick: EventEmitter<MouseEvent>;
  private handleClick;
  render(): any;
}
