import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class AiBackdrop implements ComponentInterface {
  private blocker;
  /**
   * 背景是否可见，默认可见
   */
  visible: boolean;
  /**
   * 背景是否可点击，默认为true，会出发aiBackdropTap
   */
  tappable: boolean;
  /**
   * 点击背景时，是否阻止冒泡
   */
  stopPropagation: boolean;
  /**
   * 点击背景时出发的事件
   */
  aiBackdropTap: EventEmitter<void>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  protected onMouseDown(ev: TouchEvent): void;
  private emitTap;
  render(): any;
}
