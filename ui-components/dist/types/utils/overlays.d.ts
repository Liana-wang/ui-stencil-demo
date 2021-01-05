import { HTMLAiOverlayElement } from './overlays-interface';
export declare const activeAnimations: WeakMap<any, Animation[]>;
export declare const popoverController: {
  create(options: any): Promise<any>;
  dismiss(data?: any, role?: string, id?: string): Promise<boolean>;
  getTop(): Promise<any>;
};
export declare const prepareOverlay: <T extends HTMLAiOverlayElement>(el: T) => void;
export declare const createOverlay: <T extends HTMLAiOverlayElement>(tagName: string, opts: object | undefined) => Promise<T>;
export declare const dismissOverlay: (doc: Document, data: any, role: string | undefined, overlayTag: string, id?: string) => Promise<boolean>;
export declare const getOverlays: (doc: Document, selector?: string) => HTMLAiOverlayElement[];
export declare const getOverlay: (doc: Document, overlayTag?: string, id?: string) => any;
/**
 * 展开
 */
export declare const present: (overlay: any, enterAnimation: any, opts?: any) => Promise<void>;
/**
 * 弹出层关闭
 */
export declare const dismiss: (overlay: any, data: any | undefined, role: string | undefined, leaveAnimation: any, opts?: any) => Promise<boolean>;
export declare const eventMethod: <T>(element: HTMLElement, eventName: string) => Promise<T>;
export declare const onceEvent: (element: HTMLElement, eventName: string, callback: (ev: Event) => void) => void;
