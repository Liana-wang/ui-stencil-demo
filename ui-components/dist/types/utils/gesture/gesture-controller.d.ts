declare class GestureController {
  private gestureId;
  private requestedStart;
  private disabledGestures;
  private disabledScroll;
  private capturedId?;
  /**
   * 根据传入的配置，创建一个委托
   */
  createGesture(config: GestureConfig): GestureDelegate;
  /**
   * 创建一个blocker
   */
  createBlocker(opts?: BlockerConfig): BlockerDelegate;
  start(gestureName: string, id: number, priority: number): boolean;
  /**
   * 捕获
   */
  capture(gestureName: string, id: number, priority: number): boolean;
  release(id: number): void;
  /**
   * 禁用
   */
  disableGesture(gestureName: string, id: number): void;
  /**
   * 启用
   */
  enableGesture(gestureName: string, id: number): void;
  /**
   * 禁止滚动
   */
  disableScroll(id: number): void;
  /**
   * 允许滚动
   */
  enableScroll(id: number): void;
  canStart(gestureName: string): boolean;
  isCaptured(): boolean;
  isScrollDisabled(): boolean;
  isDisabled(gestureName: string): boolean;
  private newID;
}
declare class GestureDelegate {
  private id;
  private name;
  private disableScroll;
  private ctrl?;
  private priority;
  constructor(ctrl: GestureController, id: number, name: string, priority: number, disableScroll: boolean);
  canStart(): boolean;
  start(): boolean;
  capture(): boolean;
  release(): void;
  destroy(): void;
}
declare class BlockerDelegate {
  private id;
  private disable;
  private disableScroll;
  private ctrl?;
  constructor(ctrl: GestureController, id: number, disable: string[] | undefined, disableScroll: boolean);
  block(): void;
  unblock(): void;
  destroy(): void;
}
export interface GestureConfig {
  name: string;
  priority?: number;
  disableScroll?: boolean;
}
export interface BlockerConfig {
  disable?: string[];
  disableScroll?: boolean;
}
export declare const GESTURE_CONTROLLER: GestureController;
export {};
