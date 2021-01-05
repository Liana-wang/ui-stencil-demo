/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@ai/ui-components';

import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';

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
    text: {} as PropOptions<Components.AiButton['text']>,
    disabled: {} as PropOptions<Components.AiButton['disabled']>,
    value: {} as PropOptions<Components.AiButton['value']>,
  },


  render: createCommonRender('ai-button', ['aiClick']),
});


export const AiControl = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('ai-control', []),
});


export const AiInput = /*@__PURE__*/ Vue.extend({

  props: {
    defaultValue: {} as PropOptions<Components.AiInput['defaultValue']>,
    placeholder: {} as PropOptions<Components.AiInput['placeholder']>,
    type: {} as PropOptions<Components.AiInput['type']>,
    value: {} as PropOptions<Components.AiInput['value']>,
  },

  model: {
    prop: 'value',
    event: 'aiChange'
  },

  render: createCommonRender('ai-input', ['aiChange', 'aiInput', 'aiBlur']),
});


export const AiPopover = /*@__PURE__*/ Vue.extend({

  props: {
    overlayIndex: {} as PropOptions<Components.AiPopover['overlayIndex']>,
    component: {} as PropOptions<Components.AiPopover['component']>,
    componentProps: {} as PropOptions<Components.AiPopover['componentProps']>,
    backdropDismiss: {} as PropOptions<Components.AiPopover['backdropDismiss']>,
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
    value: {} as PropOptions<Components.AiSelect['value']>,
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
    value: {} as PropOptions<Components.AiSelectOption['value']>,
  },


  render: createCommonRender('ai-select-option', []),
});


export const AiSelectPopover = /*@__PURE__*/ Vue.extend({

  props: {
    options: {} as PropOptions<Components.AiSelectPopover['options']>,
  },


  render: createCommonRender('ai-select-popover', []),
});

