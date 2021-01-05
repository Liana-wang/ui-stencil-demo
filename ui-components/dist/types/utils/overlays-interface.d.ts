import { EventEmitter } from '../stencil-public-runtime';
export interface OverlayEventDetail<T = any> {
  data?: T;
  role?: string;
}
export interface OverlayInterface {
  el: HTMLElement;
  animated: boolean;
  keyboardClose: boolean;
  overlayIndex: number;
  presented: boolean;
  didPresent: EventEmitter<void>;
  willPresent: EventEmitter<void>;
  willDismiss: EventEmitter<OverlayEventDetail>;
  didDismiss: EventEmitter<OverlayEventDetail>;
  present(): Promise<void>;
  dismiss(data?: any, role?: string): Promise<boolean>;
}
export interface OverlayController {
  create(opts?: any): Promise<HTMLElement>;
  dismiss(data?: any, role?: string, id?: string): Promise<boolean>;
  getTop(): Promise<HTMLAiOverlayElement | undefined>;
}
export interface HTMLAiOverlayElement extends HTMLElement {
  classList: any;
  overlayIndex: number;
  backdropDismiss?: boolean;
  lastFocus?: HTMLElement;
  dismiss(data?: any, role?: string): Promise<boolean>;
  componentOnReady(): Promise<this>;
}
export declare type OverlaySelect = HTMLAiPopoverElement;
