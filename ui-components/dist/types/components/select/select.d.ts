import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class AiSelect implements ComponentInterface {
  private inputId;
  private overlay?;
  private focusEl?;
  private mutationO?;
  el: any;
  /**
   * 是否处于展开状态
   */
  isExpanded: boolean;
  /**
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 预设文案
   */
  placeholder?: string | null;
  disabledChanged(): void;
  /**
   * 选中的值
   */
  selected?: any | null;
  valueChanged(): void;
  /**
   * 选中之后做对比的条件
   */
  compareWith?: string | Function | null;
  /**
   * 派发选中项改变事件
   */
  aiChange: EventEmitter<any>;
  /**
   * 派发取消选择的事件
   */
  aiCancel: EventEmitter<void>;
  /**
   * 派发聚焦事件
   */
  aiFocus: EventEmitter<void>;
  /**
   * 派发失焦事件
   */
  aiBlur: EventEmitter<void>;
  /**
   * 派发样式改变
   */
  aiStyle: EventEmitter<any>;
  connectedCallback(): Promise<void>;
  disconnectedCallback(): void;
  /**
   * 显示下拉选项
   */
  open(event?: UIEvent): Promise<any>;
  private createOverlay;
  private updateOverlayOptions;
  private createPopoverOptions;
  private openPopover;
  private close;
  private updateOptions;
  private hasValue;
  private get childOpts();
  private getText;
  private setFocus;
  private emitStyle;
  private onClick;
  private onFocus;
  private onBlur;
  render(): any;
}
