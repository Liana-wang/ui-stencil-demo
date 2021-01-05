import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { ComponentRef, ComponentProps } from '../../interface';
export declare class AiPopover implements ComponentInterface {
  private usersElement?;
  presented: boolean;
  el: any;
  /** @internal */
  overlayIndex: number;
  /**
   * 在popover中显示的组件
   */
  component: ComponentRef;
  /**
   * 传递给弹出窗的数据
   */
  componentProps?: ComponentProps;
  /** 点击背景时关闭 */
  backdropDismiss: boolean;
  /**
   * 触发动画的事件
   */
  event: any;
  /** 派发完成事件 */
  didPresent: EventEmitter<void>;
  /** 派发弹出之前事件 */
  willPresent: EventEmitter<void>;
  /** 派发弹出窗口关闭之前事件 */
  willDismiss: EventEmitter<any>;
  /** 派发弹出层已销毁事件 */
  didDismiss: EventEmitter<any>;
  connectedCallback(): void;
  present(): Promise<void>;
  dismiss(data?: any, role?: string): Promise<boolean>;
  onDidDismiss(): Promise<any>;
  onWillDismiss(): Promise<any>;
  private onDismiss;
  private onBackdropTap;
  private onLifecycle;
  render(): any;
}
