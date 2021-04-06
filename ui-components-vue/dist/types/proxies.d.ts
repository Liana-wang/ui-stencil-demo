import Vue from 'vue';
export declare const AiBackdrop: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    visible: boolean;
    tappable: boolean;
    stopPropagation: boolean;
}>;
export declare const AiButton: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    type: "link" | "default" | "text" | "primary" | "dashed" | undefined;
    htmlType: string | undefined;
    size: "small" | "large" | undefined;
    danger: boolean | undefined;
    ghost: boolean | undefined;
    block: boolean | undefined;
    shap: "round" | "circle" | undefined;
    href: string | undefined;
    target: string | undefined;
    disabled: boolean | undefined;
}>;
export declare const AiControl: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const AiInput: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    disabled: boolean;
    placeholder: string;
    readonly: boolean;
    type: string;
    value: string;
}>;
export declare const AiPopover: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    present: () => Promise<void>;
    dismiss: (data?: any, role?: string | undefined) => Promise<boolean>;
    onDidDismiss: () => Promise<any>;
    onWillDismiss: () => Promise<any>;
}, unknown, {
    overlayIndex: number;
    component: import("@ai.s/ui-components/dist/types/interface").ComponentRef;
    componentProps: import("@ai.s/ui-components/dist/types/interface").ComponentProps<null> | undefined;
    backdropDismiss: boolean;
    showBackdrop: boolean;
    event: any;
}>;
export declare const AiSelect: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    open: (event?: UIEvent | undefined) => Promise<any>;
}, unknown, {
    disabled: boolean;
    placeholder: string | null | undefined;
    selected: any;
    compareWith: string | Function | null | undefined;
}>;
export declare const AiSelectOption: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    disabled: boolean;
    option: any;
}>;
export declare const AiSelectPopover: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    options: readonly any[];
}>;
export declare const AiStringfy: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    data: any;
}>;
