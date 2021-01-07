import type { JSX } from '@ai/ui-components';
export declare const AiBackdrop: import("vue").DefineComponent<JSX.AiBackdrop & import("./vue-component-lib/utils").InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    toString?: string;
    valueOf?: unknown;
    toLocaleString?: string;
    visible?: boolean;
    constructor?: Function;
    modelValue?: string | boolean;
    hasOwnProperty?: (v: string | number | symbol) => boolean;
    isPrototypeOf?: (v: Object) => boolean;
    propertyIsEnumerable?: (v: string | number | symbol) => boolean;
    tappable?: boolean;
    stopPropagation?: boolean;
    onAiBackdropTap?: (event: CustomEvent<void>) => void;
}>, {}>;
export declare const AiButton: import("vue").DefineComponent<JSX.AiButton & import("./vue-component-lib/utils").InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: any;
} & {
    toString?: string;
    valueOf?: unknown;
    toLocaleString?: string;
    disabled?: boolean;
    text?: string;
    constructor?: Function;
    modelValue?: string | boolean;
    hasOwnProperty?: (v: string | number | symbol) => boolean;
    isPrototypeOf?: (v: Object) => boolean;
    propertyIsEnumerable?: (v: string | number | symbol) => boolean;
    onAiClick?: (event: CustomEvent<MouseEvent>) => void;
}>, {
    value: any;
}>;
export declare const AiControl: import("vue").DefineComponent<JSX.AiControl & import("./vue-component-lib/utils").InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    toString?: string;
    valueOf?: unknown;
    toLocaleString?: string;
    constructor?: Function;
    modelValue?: string | boolean;
    hasOwnProperty?: (v: string | number | symbol) => boolean;
    isPrototypeOf?: (v: Object) => boolean;
    propertyIsEnumerable?: (v: string | number | symbol) => boolean;
}>, {}>;
export declare const AiInput: import("vue").DefineComponent<JSX.AiInput & import("./vue-component-lib/utils").InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    toString?: string;
    valueOf?: unknown;
    toLocaleString?: string;
    type?: string;
    value?: string;
    constructor?: Function;
    modelValue?: string | boolean;
    hasOwnProperty?: (v: string | number | symbol) => boolean;
    isPrototypeOf?: (v: Object) => boolean;
    propertyIsEnumerable?: (v: string | number | symbol) => boolean;
    defaultValue?: string;
    placeholder?: string;
    onAiBlur?: (event: CustomEvent<any>) => void;
    onAiChange?: (event: CustomEvent<any>) => void;
    onAiInput?: (event: CustomEvent<KeyboardEvent>) => void;
}>, {}>;
export declare const AiPopover: import("vue").DefineComponent<JSX.AiPopover & import("./vue-component-lib/utils").InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    event: any;
} & {
    toString?: string;
    valueOf?: unknown;
    toLocaleString?: string;
    constructor?: Function;
    component?: import("@ai/ui-components/dist/types/interface").ComponentRef;
    modelValue?: string | boolean;
    hasOwnProperty?: (v: string | number | symbol) => boolean;
    isPrototypeOf?: (v: Object) => boolean;
    propertyIsEnumerable?: (v: string | number | symbol) => boolean;
    componentProps?: unknown;
    backdropDismiss?: boolean;
    onAiPopoverDidDismiss?: (event: CustomEvent<any>) => void;
    onAiPopoverDidPresent?: (event: CustomEvent<void>) => void;
    onAiPopoverWillDismiss?: (event: CustomEvent<any>) => void;
    onAiPopoverWillPresent?: (event: CustomEvent<void>) => void;
}>, {
    event: any;
}>;
export declare const AiSelect: import("vue").DefineComponent<JSX.AiSelect & import("./vue-component-lib/utils").InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: any;
} & {
    toString?: string;
    valueOf?: unknown;
    toLocaleString?: string;
    disabled?: boolean;
    constructor?: Function;
    modelValue?: string | boolean;
    hasOwnProperty?: (v: string | number | symbol) => boolean;
    isPrototypeOf?: (v: Object) => boolean;
    propertyIsEnumerable?: (v: string | number | symbol) => boolean;
    placeholder?: string;
    onAiBlur?: (event: CustomEvent<void>) => void;
    onAiChange?: (event: CustomEvent<any>) => void;
    compareWith?: TimerHandler;
    onAiCancel?: (event: CustomEvent<void>) => void;
    onAiFocus?: (event: CustomEvent<void>) => void;
    onAiStyle?: (event: CustomEvent<any>) => void;
}>, {
    value: any;
}>;
export declare const AiSelectOption: import("vue").DefineComponent<JSX.AiSelectOption & import("./vue-component-lib/utils").InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: any;
} & {
    toString?: string;
    valueOf?: unknown;
    toLocaleString?: string;
    disabled?: boolean;
    constructor?: Function;
    modelValue?: string | boolean;
    hasOwnProperty?: (v: string | number | symbol) => boolean;
    isPrototypeOf?: (v: Object) => boolean;
    propertyIsEnumerable?: (v: string | number | symbol) => boolean;
}>, {
    value: any;
}>;
export declare const AiSelectPopover: import("vue").DefineComponent<JSX.AiSelectPopover & import("./vue-component-lib/utils").InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    toString?: string;
    valueOf?: unknown;
    toLocaleString?: string;
    constructor?: Function;
    modelValue?: string | boolean;
    hasOwnProperty?: (v: string | number | symbol) => boolean;
    isPrototypeOf?: (v: Object) => boolean;
    propertyIsEnumerable?: (v: string | number | symbol) => boolean;
    options?: readonly any[];
}>, {}>;
export declare const AiStringfy: import("vue").DefineComponent<JSX.AiStringfy & import("./vue-component-lib/utils").InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data: any;
} & {
    toString?: string;
    valueOf?: unknown;
    toLocaleString?: string;
    constructor?: Function;
    modelValue?: string | boolean;
    hasOwnProperty?: (v: string | number | symbol) => boolean;
    isPrototypeOf?: (v: Object) => boolean;
    propertyIsEnumerable?: (v: string | number | symbol) => boolean;
}>, {
    data: any;
}>;
