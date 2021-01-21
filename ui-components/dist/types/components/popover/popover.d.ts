import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { ComponentRef, ComponentProps } from '../../interface';
export declare class AiPopover implements ComponentInterface {
  private usersElement?;
  presented: boolean;
  el: HTMLAiPopoverElement;
  /** index值 */
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
   * 是否显示背景
   */
  showBackdrop: boolean;
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
  constructor();
  /**
   * 弹出popover
   */
  present(): Promise<void>;
  /**
   * 关闭popover
   */
  dismiss(data?: any, role?: string): Promise<boolean>;
  /**
   * popover已经销毁
   */
  onDidDismiss(): Promise<any>;
  /** popover即将销毁 */
  onWillDismiss(): Promise<any>;
  private onDismiss;
  private onBackdropTap;
  private onLifecycle;
  render(): any;
}
