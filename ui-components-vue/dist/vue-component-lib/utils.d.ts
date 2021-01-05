import { VNode, CreateElement } from 'vue';
export declare const createCommonRender: (tagName: string, eventNames?: string[]) => (createElement: CreateElement) => VNode;
export declare const createCommonMethod: (methodName: string) => unknown;
