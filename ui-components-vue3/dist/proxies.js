/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';
import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';
applyPolyfills().then(() => defineCustomElements());
export const AiBackdrop = /*@__PURE__*/ defineContainer('ai-backdrop', [
    'visible',
    'tappable',
    'stopPropagation',
    'aiBackdropTap'
]);
export const AiButton = /*@__PURE__*/ defineContainer('ai-button', [
    'text',
    'disabled',
    'value',
    'aiClick'
]);
export const AiControl = /*@__PURE__*/ defineContainer('ai-control');
export const AiInput = /*@__PURE__*/ defineContainer('ai-input', [
    'defaultValue',
    'placeholder',
    'type',
    'value',
    'aiChange',
    'aiInput',
    'aiBlur'
], {
    "modelProp": "value",
    "modelUpdateEvent": "aiChange"
});
export const AiPopover = /*@__PURE__*/ defineContainer('ai-popover', [
    'overlayIndex',
    'component',
    'componentProps',
    'backdropDismiss',
    'event',
    'aiPopoverDidPresent',
    'aiPopoverWillPresent',
    'aiPopoverWillDismiss',
    'aiPopoverDidDismiss'
]);
export const AiSelect = /*@__PURE__*/ defineContainer('ai-select', [
    'disabled',
    'placeholder',
    'value',
    'compareWith',
    'aiChange',
    'aiCancel',
    'aiFocus',
    'aiBlur',
    'aiStyle'
]);
export const AiSelectOption = /*@__PURE__*/ defineContainer('ai-select-option', [
    'disabled',
    'value'
]);
export const AiSelectPopover = /*@__PURE__*/ defineContainer('ai-select-popover', [
    'options'
]);
export const AiStringfy = /*@__PURE__*/ defineContainer('ai-stringfy', [
    'data'
]);
