/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';
import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';
applyPolyfills().then(function () { return defineCustomElements(); });
export var AiBackdrop = /*@__PURE__*/ defineContainer('ai-backdrop', [
    'visible',
    'tappable',
    'stopPropagation',
    'aiBackdropTap'
]);
export var AiButton = /*@__PURE__*/ defineContainer('ai-button', [
    'text',
    'disabled',
    'aiClick'
]);
export var AiControl = /*@__PURE__*/ defineContainer('ai-control');
export var AiInput = /*@__PURE__*/ defineContainer('ai-input', [
    'disabled',
    'placeholder',
    'readonly',
    'type',
    'value',
    'aiChange',
    'aiInput',
    'aiBlur',
    'aiFocus'
], {
    "modelProp": "value",
    "modelUpdateEvent": "aiChange"
});
export var AiPopover = /*@__PURE__*/ defineContainer('ai-popover', [
    'overlayIndex',
    'component',
    'componentProps',
    'backdropDismiss',
    'showBackdrop',
    'event',
    'aiPopoverDidPresent',
    'aiPopoverWillPresent',
    'aiPopoverWillDismiss',
    'aiPopoverDidDismiss'
]);
export var AiSelect = /*@__PURE__*/ defineContainer('ai-select', [
    'disabled',
    'placeholder',
    'selected',
    'compareWith',
    'aiChange',
    'aiCancel',
    'aiFocus',
    'aiBlur',
    'aiStyle'
]);
export var AiSelectOption = /*@__PURE__*/ defineContainer('ai-select-option', [
    'disabled',
    'option'
]);
export var AiSelectPopover = /*@__PURE__*/ defineContainer('ai-select-popover', [
    'options'
]);
export var AiStringfy = /*@__PURE__*/ defineContainer('ai-stringfy', [
    'data'
]);
