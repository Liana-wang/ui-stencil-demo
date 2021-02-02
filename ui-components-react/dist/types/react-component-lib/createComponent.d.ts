import React from 'react';
export interface HTMLAiElement extends HTMLElement {
    componentOnReady(): Promise<this>;
}
interface AiReactInternalProps<ElementType> extends React.HTMLAttributes<ElementType> {
    forwardedRef: React.RefObject<ElementType>;
    ref?: React.Ref<any>;
}
export declare const createReactComponent: <PropType, ElementType extends HTMLAiElement, ContextStateType = {}, ExpandedPropsTypes = {}>(tagName: string, ReactComponentContext?: React.Context<ContextStateType> | undefined, manipulatePropsFunction?: ((originalProps: AiReactInternalProps<ElementType>, propsToPass: any) => ExpandedPropsTypes) | undefined) => React.ForwardRefExoticComponent<React.PropsWithoutRef<import("./utils").StencilReactExternalProps<PropType, ElementType>> & React.RefAttributes<ElementType>>;
export {};
