/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@ai.s/ui-components';

import { applyPolyfills, defineCustomElements } from '@ai.s/ui-components/loader';

applyPolyfills().then(() => defineCustomElements());

const customElementTags: string[] = [
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
    visible: {} as PropOptions<Components.AiBackdrop['visible']>,
    tappable: {} as PropOptions<Components.AiBackdrop['tappable']>,
    stopPropagation: {} as PropOptions<Components.AiBackdrop['stopPropagation']>,
  },


  render: createCommonRender('ai-backdrop', ['aiBackdropTap']),
});


export const AiButton = /*@__PURE__*/ Vue.extend({

  props: {
    type: {} as PropOptions<Components.AiButton['type']>,
    htmlType: {} as PropOptions<Components.AiButton['htmlType']>,
    size: {} as PropOptions<Components.AiButton['size']>,
    danger: {} as PropOptions<Components.AiButton['danger']>,
    ghost: {} as PropOptions<Components.AiButton['ghost']>,
    block: {} as PropOptions<Components.AiButton['block']>,
    shap: {} as PropOptions<Components.AiButton['shap']>,
    href: {} as PropOptions<Components.AiButton['href']>,
    target: {} as PropOptions<Components.AiButton['target']>,
    disabled: {} as PropOptions<Components.AiButton['disabled']>,
  },


  render: createCommonRender('ai-button', ['aiClick']),
});


export const AiControl = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('ai-control', []),
});


export const AiInput = /*@__PURE__*/ Vue.extend({

  props: {
    allowClear: {} as PropOptions<Components.AiInput['allowClear']>,
    bordered: {} as PropOptions<Components.AiInput['bordered']>,
    defaultValue: {} as PropOptions<Components.AiInput['defaultValue']>,
    disabled: {} as PropOptions<Components.AiInput['disabled']>,
    maxLength: {} as PropOptions<Components.AiInput['maxLength']>,
    hasPrefix: {} as PropOptions<Components.AiInput['hasPrefix']>,
    hasSuffix: {} as PropOptions<Components.AiInput['hasSuffix']>,
    placeholder: {} as PropOptions<Components.AiInput['placeholder']>,
    readonly: {} as PropOptions<Components.AiInput['readonly']>,
    value: {} as PropOptions<Components.AiInput['value']>,
  },

  model: {
    prop: 'value',
    event: 'aiChange'
  },

  render: createCommonRender('ai-input', ['aiChange', 'aiPressEnter', 'aiInput', 'aiBlur', 'aiFocus']),
});


export const AiPopover = /*@__PURE__*/ Vue.extend({

  props: {
    overlayIndex: {} as PropOptions<Components.AiPopover['overlayIndex']>,
    component: {} as PropOptions<Components.AiPopover['component']>,
    componentProps: {} as PropOptions<Components.AiPopover['componentProps']>,
    backdropDismiss: {} as PropOptions<Components.AiPopover['backdropDismiss']>,
    showBackdrop: {} as PropOptions<Components.AiPopover['showBackdrop']>,
    event: {} as PropOptions<Components.AiPopover['event']>,
  },


  methods: {
    present: createCommonMethod('present') as Components.AiPopover['present'],
    dismiss: createCommonMethod('dismiss') as Components.AiPopover['dismiss'],
    onDidDismiss: createCommonMethod('onDidDismiss') as Components.AiPopover['onDidDismiss'],
    onWillDismiss: createCommonMethod('onWillDismiss') as Components.AiPopover['onWillDismiss'],
  },
  render: createCommonRender('ai-popover', ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']),
});


export const AiSelect = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.AiSelect['disabled']>,
    placeholder: {} as PropOptions<Components.AiSelect['placeholder']>,
    selected: {} as PropOptions<Components.AiSelect['selected']>,
    compareWith: {} as PropOptions<Components.AiSelect['compareWith']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.AiSelect['open'],
  },
  render: createCommonRender('ai-select', ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']),
});


export const AiSelectOption = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.AiSelectOption['disabled']>,
    option: {} as PropOptions<Components.AiSelectOption['option']>,
  },


  render: createCommonRender('ai-select-option', []),
});


export const AiSelectPopover = /*@__PURE__*/ Vue.extend({

  props: {
    options: {} as PropOptions<Components.AiSelectPopover['options']>,
  },


  render: createCommonRender('ai-select-popover', []),
});


export const AiStringfy = /*@__PURE__*/ Vue.extend({

  props: {
    data: {} as PropOptions<Components.AiStringfy['data']>,
  },


  render: createCommonRender('ai-stringfy', []),
});

