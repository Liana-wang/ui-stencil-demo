import { ComponentRef } from '../interface';
export declare const attachComponent: (container: Element, component: ComponentRef, cssClasses?: string[], componentProps?: {
  [key: string]: any;
}) => Promise<HTMLElement>;
export declare const detachComponent: (element: HTMLElement | undefined) => Promise<void>;
