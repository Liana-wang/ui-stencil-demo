/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';
import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';
applyPolyfills().then(() => defineCustomElements());
const customElementTags = [
    'ai-backdrop',
    'ai-button',
    'ai-control',
    'ai-input',
    'ai-popover',
    'ai-select',
    'ai-select-option',
    'ai-select-popover',
    'ai-stringfy',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];
export const AiBackdrop = /*@__PURE__*/ Vue.extend({
    props: {
        visible: {},
        tappable: {},
        stopPropagation: {},
    },
    render: createCommonRender('ai-backdrop', ['aiBackdropTap']),
});
export const AiButton = /*@__PURE__*/ Vue.extend({
    props: {
        text: {},
        disabled: {},
        btnValue: {},
    },
    render: createCommonRender('ai-button', ['aiClick']),
});
export const AiControl = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('ai-control', []),
});
export const AiInput = /*@__PURE__*/ Vue.extend({
    props: {
        defaultValue: {},
        placeholder: {},
        type: {},
        value: {},
    },
    model: {
        prop: 'value',
        event: 'aiChange'
    },
    render: createCommonRender('ai-input', ['aiChange', 'aiInput', 'aiBlur']),
});
export const AiPopover = /*@__PURE__*/ Vue.extend({
    props: {
        overlayIndex: {},
        component: {},
        componentProps: {},
        backdropDismiss: {},
        event: {},
    },
    methods: {
        present: createCommonMethod('present'),
        dismiss: createCommonMethod('dismiss'),
        onDidDismiss: createCommonMethod('onDidDismiss'),
        onWillDismiss: createCommonMethod('onWillDismiss'),
    },
    render: createCommonRender('ai-popover', ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']),
});
export const AiSelect = /*@__PURE__*/ Vue.extend({
    props: {
        disabled: {},
        placeholder: {},
        selected: {},
        compareWith: {},
    },
    methods: {
        open: createCommonMethod('open'),
    },
    render: createCommonRender('ai-select', ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']),
});
export const AiSelectOption = /*@__PURE__*/ Vue.extend({
    props: {
        disabled: {},
        option: {},
    },
    render: createCommonRender('ai-select-option', []),
});
export const AiSelectPopover = /*@__PURE__*/ Vue.extend({
    props: {
        options: {},
    },
    render: createCommonRender('ai-select-popover', []),
});
export const AiStringfy = /*@__PURE__*/ Vue.extend({
    props: {
        data: {},
    },
    render: createCommonRender('ai-stringfy', []),
});
//# sourceMappingURL=proxies.js.map