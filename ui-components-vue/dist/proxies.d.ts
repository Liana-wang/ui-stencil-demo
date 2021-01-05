import Vue from 'vue';
export declare const AiBackdrop: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    visible: boolean;
    tappable: boolean;
    stopPropagation: boolean;
}>;
export declare const AiButton: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    text: string;
    disabled: boolean;
    value: any;
}>;
export declare const AiControl: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const AiInput: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    defaultValue: string;
    placeholder: string;
    type: string;
    value: string;
}>;
export declare const AiPopover: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    present: () => Promise<void>;
    dismiss: (data?: any, role?: string) => Promise<boolean>;
    onDidDismiss: () => Promise<any>;
    onWillDismiss: () => Promise<any>;
}, unknown, {
    overlayIndex: number;
    component: import("@ai/ui-components/dist/types/interface").ComponentRef;
    componentProps: import("@ai/ui-components/dist/types/interface").ComponentProps<null>;
    backdropDismiss: boolean;
    event: any;
}>;
export declare const AiSelect: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    open: (event?: UIEvent) => Promise<any>;
}, unknown, {
    disabled: boolean;
    placeholder: string;
    value: any;
    compareWith: TimerHandler;
}>;
export declare const AiSelectOption: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    disabled: boolean;
    value: any;
}>;
export declare const AiSelectPopover: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    options: readonly any[];
}>;
