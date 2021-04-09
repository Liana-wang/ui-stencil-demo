/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@ai.s/ui-components';

import { applyPolyfills, defineCustomElements } from '@ai.s/ui-components/loader';

applyPolyfills().then(() => defineCustomElements());

export const AiBackdrop = /*@__PURE__*/ defineContainer<JSX.AiBackdrop>('ai-backdrop', [
  'visible',
  'tappable',
  'stopPropagation',
  'aiBackdropTap'
]);


export const AiButton = /*@__PURE__*/ defineContainer<JSX.AiButton>('ai-button', [
  'type',
  'htmlType',
  'size',
  'danger',
  'ghost',
  'block',
  'shap',
  'href',
  'target',
  'disabled',
  'aiClick'
]);


export const AiControl = /*@__PURE__*/ defineContainer<JSX.AiControl>('ai-control');


export const AiInput = /*@__PURE__*/ defineContainer<JSX.AiInput>('ai-input', [
  'allowClear',
  'bordered',
  'defaultValue',
  'disabled',
  'maxLength',
  'hasPrefix',
  'hasSuffix',
  'placeholder',
  'readonly',
  'value',
  'aiChange',
  'aiPressEnter',
  'aiInput',
  'aiBlur',
  'aiFocus'
],
{
  "modelProp": "value",
  "modelUpdateEvent": "aiChange"
});


export const AiPopover = /*@__PURE__*/ defineContainer<JSX.AiPopover>('ai-popover', [
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


export const AiSelect = /*@__PURE__*/ defineContainer<JSX.AiSelect>('ai-select', [
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


export const AiSelectOption = /*@__PURE__*/ defineContainer<JSX.AiSelectOption>('ai-select-option', [
  'disabled',
  'option'
]);


export const AiSelectPopover = /*@__PURE__*/ defineContainer<JSX.AiSelectPopover>('ai-select-popover', [
  'options'
]);


export const AiStringfy = /*@__PURE__*/ defineContainer<JSX.AiStringfy>('ai-stringfy', [
  'data'
]);

