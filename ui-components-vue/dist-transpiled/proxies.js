import { __spreadArrays } from "tslib";
/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';
import { applyPolyfills, defineCustomElements } from '@ai.s/ui-components/loader';
applyPolyfills().then(function () { return defineCustomElements(); });
var customElementTags = [
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
Vue.config.ignoredElements = __spreadArrays(Vue.config.ignoredElements, customElementTags);
export var AiBackdrop = /*@__PURE__*/ Vue.extend({
    props: {
        visible: {},
        tappable: {},
        stopPropagation: {},
    },
    render: createCommonRender('ai-backdrop', ['aiBackdropTap']),
});
export var AiButton = /*@__PURE__*/ Vue.extend({
    props: {
        type: {},
        htmlType: {},
        size: {},
        danger: {},
        ghost: {},
        block: {},
        shap: {},
        href: {},
        target: {},
        disabled: {},
    },
    render: createCommonRender('ai-button', ['aiClick']),
});
export var AiControl = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('ai-control', []),
});
export var AiInput = /*@__PURE__*/ Vue.extend({
    props: {
        disabled: {},
        placeholder: {},
        readonly: {},
        type: {},
        value: {},
    },
    model: {
        prop: 'value',
        event: 'aiChange'
    },
    render: createCommonRender('ai-input', ['aiChange', 'aiInput', 'aiBlur', 'aiFocus']),
});
export var AiPopover = /*@__PURE__*/ Vue.extend({
    props: {
        overlayIndex: {},
        component: {},
        componentProps: {},
        backdropDismiss: {},
        showBackdrop: {},
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
export var AiSelect = /*@__PURE__*/ Vue.extend({
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
export var AiSelectOption = /*@__PURE__*/ Vue.extend({
    props: {
        disabled: {},
        option: {},
    },
    render: createCommonRender('ai-select-option', []),
});
export var AiSelectPopover = /*@__PURE__*/ Vue.extend({
    props: {
        options: {},
    },
    render: createCommonRender('ai-select-popover', []),
});
export var AiStringfy = /*@__PURE__*/ Vue.extend({
    props: {
        data: {},
    },
    render: createCommonRender('ai-stringfy', []),
});
//# sourceMappingURL=proxies.js.map