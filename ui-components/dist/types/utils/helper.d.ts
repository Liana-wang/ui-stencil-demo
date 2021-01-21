import { EventEmitter } from '../stencil-public-runtime';
export declare const getElementRoot: (el: HTMLElement, fallback?: HTMLElement) => HTMLElement | ShadowRoot;
export declare const raf: (h: any) => any;
export declare const removeEventListener: (el: any, eventName: string, callback: any, opts?: any) => any;
export declare const addEventListener: (el: any, eventName: string, callback: any, opts?: any) => any;
export declare const renderHiddenInput: (always: boolean, container: HTMLElement, value: string | undefined | null, disabled: boolean) => void;
export declare const hasShadowDom: (el: HTMLElement) => boolean;
export declare const debounceEvent: (event: EventEmitter, wait: number) => EventEmitter;
export declare const debounce: (func: (...args: any[]) => void, wait?: number) => (...args: any[]) => any;
